const { exec } = require('node:child_process');

/** the lockfile needs to be compatible accross registries, internal and external */
module.exports = {
  hooks: {
    afterAllResolved(lockfile) {
      const pnpmLock = structuredClone(lockfile);
      for (const packagePath in pnpmLock.packages) {
        delete pnpmLock.packages[packagePath]?.resolution?.integrity;
        delete pnpmLock.packages[packagePath]?.resolution?.tarball;
      }

      // Clean-up yaml
      exec('pnpm prettier:fix pnpm-lock.yaml');

      return pnpmLock;
    },
  },
};
