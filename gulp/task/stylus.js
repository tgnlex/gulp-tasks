const stylus = require('stylus');
const nib = require('nib');
const {styleSrc, styleOut, enc} = require('../data/vars');
const {src, dest} = require('gulp');
const fs = require('fs');
const main = styleSrc + 'main.styl';
const output = styleOut + '/main.css';
const source = fs.readFileSync(styleSrc + 'main.styl', enc)
function compile() {
  return stylus(source)
  .set('filename', main)
  .set('compress', false)
  .use(nib())
  .render(function(err, css) {
    if (err) throw err;
    console.log(css);
    fs.writeFileSync(styleOut, css);
  })
}

exports.stylus = compile;
