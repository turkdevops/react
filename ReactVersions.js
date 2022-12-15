'use strict';

// This module is the single source of truth for versioning packages that we
// publish to npm.
//
// Packages will not be published unless they are added here.
//
// The @latest channel uses the version as-is, e.g.:
//
//   18.0.0
//
// The @next channel appends additional information, with the scheme
// <version>-<label>-<commit_sha>, e.g.:
//
//   18.0.0-alpha-a1c2d3e4
//
// The @experimental channel doesn't include a version, only a date and a sha, e.g.:
//
//   0.0.0-experimental-241c4467e-20200129

const ReactVersion = '18.3.0';

// The label used by the @next channel. Represents the upcoming release's
// stability. Could be "alpha", "beta", "rc", etc.
const nextChannelLabel = 'next';

const stablePackages = {
  'eslint-plugin-react-hooks': '5.0.0',
  'jest-react': '0.15.0',
  react: ReactVersion,
  'react-art': ReactVersion,
  'react-dom': ReactVersion,
  'react-server-dom-webpack': ReactVersion,
  'react-is': ReactVersion,
  'react-reconciler': '0.30.0',
  'react-refresh': '0.15.0',
  'react-test-renderer': ReactVersion,
  'use-subscription': '1.9.0',
  'use-sync-external-store': '1.3.0',
  scheduler: '0.24.0',
};

// These packages do not exist in the @next or @latest channel, only
// @experimental. We don't use semver, just the commit sha, so this is just a
// list of package names instead of a map.
const experimentalPackages = [];

module.exports = {
  ReactVersion,
  nextChannelLabel,
  stablePackages,
  experimentalPackages,
};
