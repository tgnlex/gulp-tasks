const {src} = require('gulp');
const {srcPath} = require('../data/vars.js');
function hint() {
return src(srcPath + '*.js')
    .pipe(jshint());
};


exports.hint = hint;