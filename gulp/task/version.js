
const {readFileSync} = require('fs');
const { pkgPath, enc } = require('../data/vars.js');
const logger = require('gulplog');



async function version() {
  const {version} = JSON.parse(readFileSync(pkgPath, enc));
  logger.info(`Package Version: ${version}`);
};

module.exports = { version };