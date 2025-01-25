const { src, dest } = require('gulp');
const {jsSrc, appSrc, jsOut, appOut} = require('../data/vars');
const eslint = require('gulp-eslint');
const source = {
  js: jsSrc + '*.js',
  app: appSrc + '*.js'
}
const sources = [source.js, source.app];
const format = eslint.format;
const failOn = eslint.failOnError;
function linter() {
  return src(sources)
    .pipe(eslint())
    .pipe(format())
    .pipe(failOn());
};

exports.lint = linter;