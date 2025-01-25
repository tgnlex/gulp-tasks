const {resolve} = require('path');
let pkg = '/package.json';
let src = 'src/';
let out = 'build/';
let static = src + 'static/';
let dist = out + 'dist/';
let public = out + 'public/';

module.exports.pkg = pkg;
module.exports.enc = 'utf8';
module.exports.rootPath = resolve(__dirname, '../');
module.exports.publicPath = public;
module.exports.srcPath = src;
module.exports.outPath = out;
module.exports.distPath = dist;

module.exports.appSrc = src + 'app/';
module.exports.jsSrc = static + 'scripts/';
module.exports.cssSrc = static + 'style/';
module.exports.htmlSrc = static + 'view/';

module.exports.appOut = dist;
module.exports.jsOut = public + 'javascript/';
module.exports.cssOut = public + 'css/';
module.exports.htmlOut = public;
