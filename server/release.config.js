const releaseFactory = require('../release/config-factory');
const { name } = require('./package.json');

module.exports = releaseFactory({
  tagFormat: 'server-${version}',
  name,
});
