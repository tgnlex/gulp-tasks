const gulp = require('gulp')

const {
  version, 
  stylus,
  greet, 
  hint, 
  lint,
  copy, 
  help,
  ejs
} = require('./gulp');

/*** GENERAL  ***/
exports.help = help;
exports.version = version;
/*** FILES ***/
exports.copy = copy;
/*** LINTING  ***/
exports.hint = hint;
exports.lint = lint;
/*** HTML + TEMPLATE ***/
exports.ejs = ejs;
/*** STYLESHEETS  ***/
exports.stylus = stylus;
/*** JUST FOR FUN ***/
exports.greet = greet;
/*** DEFAULT TASK ***/
exports.default = help;
