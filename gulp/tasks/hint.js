const {src} = require('gulp');
const {srcPath} = require('../vars.js');
function hint() {
return src(srcPath + '*.js')
    .pipe(jshint());
};


exports.hint = hint;