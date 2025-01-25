const {ext} = require('../data/extnames');
function check(file, ext) {
  const extn = file.extname;
  return extn === ext;
}
/*** LANGUAGES ***/

function isJS(file)     { return check(file, ext.js)  };
function isTS(file)     { return check(file, ext.ts)  };
function isCoffee(file) { return check(file, ext.cs)  };
function isPure(file)   { return check(file, ext.ps)  };
function isVBS(file)    { return check(file, ext.vbs) };
function isLua(file)    { return check(file, ext.lua) };
function isPHP(file)    { return check(file, ext.php) };
function isPerl(file)   { return check(file, ext.perl)};
function isPy(file)     { return check(file, ext.py)  };
/*** DATABASE ***/
function isSQL(file)    { return check(file, ext.sql) }; 
/*** SHELL ***/
function isBash(file)   { return check(file, ext.bash) };
function isCsh(file)    { return check(file, ext.csh) };
function isZsh(file)    { return check(file, ext.zsh) };
function isKsh(file)    { return check(file, ext.ksh) };
function isEsh(file)    { return check(file, ext.esh) };
function isPsh(file)    { return check(file, ext.psh) };
/*** HYPERTEXT ***/
function isHTML(file)   { return check(file, ext.html)};
function isJSX(file)    { return check(file, ext.jsx) };
function isHBS(file)    { return check(file, ext.hbs) };
function isEJS(file)    { return check(file, ext.ejs) };
function isETA(file)    { return check(file, ext.eta) };
function isNJK(file)    { return check(file, ext.njk); }
function isMarko(file)  { return check(file, ext.marko)}
/*** STYLE ***/
function isCSS(file)    { return check(file, ext.css) };
function isSASS(file)   { return check(file, sass) };
function isLESS(file)   { return check(file, ext.less) }
function isSTYL(file)   { return check(file, ext.stylus) }
function isStyle(file)  { return check(file, style) };
/*** DATA ***/
function isCSV(file)    { return check(file, csv) };
function isXML(file)    { return check(file, ext.xml) };
function isJSON(file)   { return check(file, ext.json)};
function isYAML(file)   { return check(file, ext.yaml)};
function isTOML(file)   { return check(file, ext.toml)};
/*** CONTENT ***/
function isText(file)   { return check(file, ext.txt) };
function isPDF(file)    { return check(file, ext.pdf) };
function isMD(file)     { return check(file, ext.md)  };
/*** ASSETS ***/
function isJPG(file)    { return check(file, ext.jpg) };
function isPNG(file)    { return check(file, ext.png) };
function isBMP(file)    { return check(file, ext.bmp) };
function isSVG(file)    { return check(file, ext.svg) };
function isImage(file)  { return check(file, ext.img) };


const filetype = {
  // Languages
  js: isJS,
  ts: isTS,
  coffee: isCoffee,
  pure: isPure,
  vbs: isVBS,
  php: isPHP,
  lua: isLua,
  perl: isPerl,  
  python: isPy,
  // Database 
  sql: isSQL,
  // Shell
  bash: isBash,
  zsh: isZsh,
  csh: isCsh,
  ksh: isKsh,
  esh: isEsh,
  psh: isPsh,
  // HTML + Templates
  html: isHTML,
  jsx: isJSX,
  ejs: isEJS,
  eta: isETA,
  njk: isNJK,
  hbs: isHBS,
  marko: isMarko,
  handlebars: isHBS,
  // CSS + Preprocesss
  css: isCSS,
  sass: isSASS,
  less: isLESS, 
  styl: isSTYL, 
  style: isStyle,
  // DATA
  csv: isCSV,
  xml: isXML,
  json: isJSON,
  yaml: isYAML,
  toml: isTOML,
  // CONTENT
  text: isText,
  pdf: isPDF,
  md: isMD,
  // ASSETS
  svg: isSVG,
  jpg: isJPG,
  png: isPNG,
  bmp: isBMP,
  img: isImage,
};

export default filetype;