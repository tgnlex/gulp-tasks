const { src, dest} = require('gulp');
const {srcPath, outPath} = require ('../data/vars.js');


function copy() {
  return src(srcPath + '*')
    .pipe(dest(outPath))
};

module.exports = {
    copy
}