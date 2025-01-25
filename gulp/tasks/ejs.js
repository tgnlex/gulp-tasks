const { src, dest } = require('gulp')
const { htmlSrc, htmlOut } = require('../vars');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');

const source = htmlSrc + '*.ejs'
const output = htmlOut;

function compileEJS() {
    return src(source)
      .pipe(ejs({}))
      .pipe(rename({extname: '.html'}))
      .pipe(dest(output))
}

exports.ejs = compileEJS;
