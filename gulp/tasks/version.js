
const {readFileSync} = require('fs');
const { pkgPath, enc } = require('../vars.js');
const logger = require('gulplog');

const greet = function(cb) {
  console.info('[GULP]: Hello Developer!');
  cb();
};

async function version() {
  const {version} = JSON.parse(readFileSync(pkgPath, enc));
  logger.info(`Package Version: ${version}`);
};

module.exports = { greet, version };