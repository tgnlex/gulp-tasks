// Ecmascript
let javascript = '.js' | '.cjs' | '.mjs';
let typescript = '.ts' | '.cts' | '.mts';
let coffeescript = '.coffee';
let purescript = '.purs';
// LANGUAGES
let py = '.py';
let vbs = '.vbs';
let php = '.php';
let lua = '.lua';
let perl = '.pl';
// DATABASE
let sql = '.sql';
// SHELL
let bash = '.sh' | '.bash';
let csh = '.csh' | '.tcsh';
let zsh = '.zsh';
let ksh = '.ksh';
let esh = '.esh';
let psh = '.ps1' | '.ps1xml' | '.psc1' | '.psd1' | 'psm1' | 'psd1';
// HTML
let html = '.html';
let jsx = '.jsx' | '.tsx';
let ejs = '.ejs';
let eta = '.eta';
let njk = '.njk';
let hbs = '.hbs' | '.handlebars';
let marko = '.marko';
// STYLE
let css = '.css';
let sass = '.sass' | '.scss'
let less = '.less';
let stylus = '.styl';
let style = css | less | sass | styl;

// DATA
let csv = '.csv' | '.tsv';
let xml = '.xml';
let json = '.json';
let yaml = '.yaml';
let toml = '.toml';
// ASSETS/CONTENT
let md = '.md' | '.mdx';
let txt = '.txt';
let pdf = '.pdf';
// ASSETS/IMAGE
let jpg = '.jpg' | '.jpeg';
let png = '.png';
let bmp = '.bmp';
let svg = '.svg';
let img = jpg | png | bmp | svg;
const ext = {
  // langs
  js: javascript, 
  ts: typescript, 
  cs: coffeescript,
  ps: purescript,
  py: py,
  php: php,
  lua: lua,
  vbs: vbs,
  perl: perl,
  // db
  sql: sql,
  // shell
  bash: bash,
  psh: psh,
  zsh: zsh,
  ksh: ksh,
  csh: csh,
  esh: esh,
  // html 
  html: html,
  jsx: jsx, 
  ejs: ejs,
  eta: eta,
  njk: njk,
  hbs: hbs,
  marko: marko,
  // style
  css: css, 
  sass: sass,
  less: less,
  stylus: stylus,
  style: style,
  // content
  md: md,
  txt: txt,
  pdf: pdf,
  // data
  csv: csv, 
  xml: xml,
  json: json,
  yaml: yaml,
  toml: toml,
  // assets
  jpg: jpg,
  png: png,
  bmp: bmp,
  svg: svg,
  img: img
};

export default ext;