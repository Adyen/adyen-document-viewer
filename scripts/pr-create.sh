#!/bin/bash

### Helper utility for creating branches for pull requests on Github
### From 1 unpushed commit on local main it creates a branch remotely ready for a PR
### using the b branch naming `pr/{ldap}/{type}/{commitMessageToBranchname}`
### and returns to a fresh version of main without the commit

# Text variables
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m' # No Color
BOLD=$(tput bold)
CYAN='\033[0;36m'
REGULAR=$(tput sgr0)

# Converts a conventional commit message to a valid git branch name
convert_commit_to_branch_name() {
  local commit_message="$1"

  # Convert to lowercase
  branch_name=$(echo "$commit_message" | tr '[:upper:]' '[:lower:]')
  # Replace spaces and special characters with dashes
  branch_name=$(echo "$branch_name" | sed -E 's/[^a-z0-9]+/-/g')
  # Remove leading and trailing dashes
  branch_name=$(echo "$branch_name" | sed -E 's/^-+|-+$//g')
  # Replace first dashe with slashe
  branch_name=$(echo "$branch_name" | sed -E 's/-/\//')
  # Truncate to 100 characters if necessary
  branch_name=${branch_name:0:100}
  # Ensure the branch name does not start or end with a slash
  branch_name=$(echo "$branch_name" | sed -E 's|^/||; s|/$||')

  echo "$branch_name"
}

currentBranch=$(git rev-parse --abbrev-ref HEAD)

# Stop if not on main branch
if [ "${currentBranch}" != "main" ]; then
  printf "${RED}ERROR:${NC} You are ${RED}not${NC} on the branch ${CYAN}${BOLD}main${REGULAR}${NC}!\n"
  printf "This command can be used only from main.\n"
  exit 1
fi

# Stop if there is less than 1 or more than one commit
printf "Pulling the latest version of ${CYAN}${BOLD}main${REGULAR}${NC}\n"
git pull &>/dev/null
originMainCommits=$(git rev-list origin/main --count)
localMainCommits=$(git rev-list main --count)
if [ $((localMainCommits-originMainCommits)) -lt 1 ]; then
    printf "${RED}ERROR:${NC} You need to have 1 commit to generate a PR\n"
    exit 1
fi
if [ $((localMainCommits-originMainCommits)) -gt 1 ]; then
    printf "${RED}ERROR:${NC} Sorry, cannot create a PR from more than 1 commit\n"
    exit 1
fi

# Stash everything that has not been committed
oldStashNumber=$(git stash list | wc -l)
git stash --include-untracked  &>/dev/null
newStashNumber=$(git stash list | wc -l)

# Build branch name as `pr/{ldap}/{type}/{commitMessageToBranchname}`
lastCommitMessage=$(git log -1 --pretty=%B)
lastCommitMessage=$(echo "$lastCommitMessage" | head -n 1)

branchNameFromCommitMessage=$(convert_commit_to_branch_name "${lastCommitMessage}")
newBranchName="pr/$USER/${branchNameFromCommitMessage}"

echo ""
printf "Trying to push ${CYAN}${BOLD}${newBranchName}${REGULAR}${NC}\n"
# Create new branch, move commit from master
git checkout -b "${newBranchName}" || exit 1
git checkout main  || exit 1
git reset --hard HEAD~1  || exit 1
git checkout "${newBranchName}"  || exit 1

githubRepoUrl="https://github.com/Adyen/adyen-document-viewer/compare/"
git push --set-upstream origin "${newBranchName}" &>/dev/null  || exit 1
printf "Branch created on Github, find it here and open the PR:\n"
printf "${githubRepoUrl}${newBranchName}?expand=1\n"

echo ""
printf "${GREEN}SUCCESS:${NC} pushing branch to Github!\n"

printf "Moving you back to the ${CYAN}${BOLD}main${REGULAR}${NC} branch!\n"
# Pop the stash from above if any
git checkout main &>/dev/null

if [ $newStashNumber != $oldStashNumber ]; then
  git stash pop || printf "${RED}WARNING:${NC} stash pop failed, resolve conflicts manually with 'git stash pop'\n"
fi

