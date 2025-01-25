const {empty, divider} = require('./variables');
const log = console.info;
const head = {};
const foot = {};
head.border = divider;
head.top = empty;
head.above =    `#                 #===========#                 #`;
head.title   =  '#                 # HELP MENU #                 #';
head.under   =  `#                 #===========#                 #`;
head.bottom = empty;

foot.bottom = empty;
foot.border = divider;

const header = () => {
  log(head.border);
  log(head.top);
  log(head.above);
  log(head.title);
  log(head.under);
  log(head.bottom);
}
const footer = () => {
  log(foot.bottom);
  log(foot.border);
};

exports.header = header;
exports.footer = footer;