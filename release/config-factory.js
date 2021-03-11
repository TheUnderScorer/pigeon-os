const path = require('path');
const glob = require('glob');
const root = path.resolve(__dirname, '..');

const appNames = ['client', 'server'];

const releaseFactory = ({ tagFormat, name, assets = [], execConfig }) => {
  const plugins = [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular-scoped',
        releaseRules: [
          ...appNames
            .filter((appName) => appName !== name)
            .map((appName) => ({ scope: appName, release: false })),
        ],
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular-scoped',
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'docs/CHANGELOG.md',
      },
    ],
    '@semantic-release/npm',
    execConfig ? ['@semantic-release/exec', execConfig] : [],
    [
      '@semantic-release/git',
      {
        assets: [
          'docs/CHANGELOG.md',
          'package.json',
          'package-lock.json',
          ...assets,
        ],
      },
    ],
    '@semantic-release/github',
  ];

  return {
    tagFormat,
    repositoryUrl: 'https://github.com/TheUnderScorer/pigeon-os.git',
    branches: [
      '+([0-9])?(.{+([0-9]),x}).x',
      'master',
      'next',
      {
        name: 'alpha',
        prerelease: true,
      },
      {
        name: 'beta',
        prerelease: true,
      },
    ],
    plugins: plugins.filter((plugin) => plugin.length > 0),
  };
};

module.exports = releaseFactory;
