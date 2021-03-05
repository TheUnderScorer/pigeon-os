/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-require-imports */
const { pathsToModuleNameMapper } = require("ts-jest/utils");
// @ts-ignore
const { compilerOptions } = require("./tsconfig.json");

/** @typedef {import('ts-jest')} */
/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  // Setup
  // ---------------
  preset: "ts-jest",

  // Paths
  // ---------------
  roots: ["<rootDir>/client", "<rootDir>/server"],
  testMatch: ["**/*.test.ts?(x)"],
  /*  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),*/

  // Coverage
  // ---------------
  collectCoverageFrom: [
    `**/src/**/*.ts?(x)`,

    /**
     * Ignore
     * - type definition files
     * - index files (they're just used for better export)
     * - Storybook related files
     * - CLI Files
     * - Test utilities
     * - Apollo files (client)
     * - Typings
     * - Pages (client)
     */
    "!**/{*.d.ts,index.ts}",
    "!**/.storybook/**",
    "!**/stories/**",

    // Ignore node_modules and build folders
    "!**/node_modules/**",
    "!**/build/**",
  ],

  transform: {
    "^.+\\.svg$": "<rootDir>/tests/transform/svg-transform.js",
    "^.+\\.png$": "<rootDir>/tests/transform/png-transform.js",
    "^.+\\.gif": "<rootDir>/tests/transform/gif-transform.js",
  },

  globals: {
    // Ts-jest configuration
    // ---------------
    "ts-jest": {
      transpileOnly: true,
      diagnostics: {
        warnOnly: true,
      },
    },
  },
  setupFilesAfterEnv: ["<rootDir>/client/src/setupTests.ts"],
  testTimeout: 10000,
};
