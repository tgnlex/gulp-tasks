const gulp = require('gulp')

const {
  version, 
  greet, 
  hint, 
  lint,
  copy, 
  help,
  ejs
} = require('./gulp');

exports.default = help;
exports.help = help;
exports.greet = greet;
exports.version = version;
exports.copy = copy;
exports.hint = hint;
exports.lint = lint;
exports.ejs = ejs;
