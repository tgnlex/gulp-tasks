const {resolve} = require('path');
let pkg = '/package.json';
let root = resolve(__dirname + '../../../');

let src = 'src/';
let out = root + '/build/';
let static = src + 'static/';
let dist = out + 'dist/';
let public = out + 'public/';
module.exports.pkg = pkg;
module.exports.enc = 'utf8';
module.exports.rootPath = root
module.exports.publicPath = public;
module.exports.srcPath = src;
module.exports.outPath = out;
module.exports.distPath = dist;

module.exports.appSrc = src + 'app/';
module.exports.jsSrc = static + 'scripts/';
module.exports.styleSrc = static + 'style/';
module.exports.htmlSrc = static + 'view/';

module.exports.appOut = dist;
module.exports.jsOut = public + 'javascript';
module.exports.styleOut = public + 'style/main.css';
module.exports.htmlOut = public;
