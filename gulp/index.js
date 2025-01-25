const { help } = require('./help')
const { greet } = require('./tasks/greet')
const { version } = require('./tasks/version');
const { copy } = require('./tasks/file');
const { hint } = require('./tasks/hint');
const { ejs } = require('./tasks/ejs');
const { lint } = require('./tasks/lint');
module.exports = {
  greet, 
  help,
  hint,
  copy,
  version,
  ejs,
  lint
}