const { help } = require('./help')
const { greet } = require('./task/greet')
const { version } = require('./task/version');
const { copy } = require('./task/file');
const { hint } = require('./task/hint');
const { ejs } = require('./task/ejs');
const { lint } = require('./task/lint');
const { stylus } = require('./task/stylus');
module.exports = {
  greet, 
  help,
  hint,
  copy,
  version,
  ejs,
  lint,
  stylus
}