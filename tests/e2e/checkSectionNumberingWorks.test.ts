import { expect, test } from '@playwright/test';

test('showSectionNumbering should display sections and subsections when Second section is expanded', async ({
  page,
}) => {
  await page.goto('/showSectionNumbering.html');

  await page.getByRole('button', { name: /^2 Second section$/ }).click();

  await expect(
    page.getByRole('heading', { name: /^2.1 This is a section inside the second section$/ }),
  ).toBeVisible();

  await expect(
    page.getByText(/^This is unique content for a subsection paragraph\.$/),
  ).toBeVisible();

  await expect(page.getByRole('heading', { name: /^2.1.1 This is a subsection$/ })).toBeVisible();

  await expect(
    page.getByText(/^This is placeholder text for a nested subsection\.$/),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: /^2.2 This is another section inside the second section$/ }),
  ).toBeVisible();

  await expect(
    page.getByText(/^This paragraph contains additional distinct mock text\.$/),
  ).toBeVisible();
});
