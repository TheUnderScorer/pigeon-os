const releaseFactory = require('../release/config-factory');
const { name } = require('./package.json');

module.exports = releaseFactory({
  tagFormat: 'pigeon-os-server-${version}',
  name,
});
