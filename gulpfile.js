const gulp = require('gulp')

const {
  version, 
  greet, 
  hint, 
  copy, 
  help,
  ejs
} = require('./gulp');


exports.help = help;
exports.greet = greet;
exports.version = version;
exports.copy = copy;
exports.hint = hint;
exports.ejs = ejs;
