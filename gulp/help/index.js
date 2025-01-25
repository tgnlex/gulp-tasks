const { desc } = require('../data/description');
const {header, footer} = require('./menu');
const log = console.info;



function help() {
  header()
  log(`#  1. help    - ${desc.help}                 #`);
  log(`#  2. greet   - ${desc.greet}            #`);
  log(`#  3. version - ${desc.version}        #`);
  log(`#  4. copy    - ${desc.copy}   #`);
  log(`#  5. lint    - ${desc.lint}      #`);
  log(`#  6. hint    - ${desc.hint}      #`);
  log(`#  7. ejs     - ${desc.ejs}          #`);
  log(`#  8. stylus  - ${desc.stylus}         #` )
  footer();
  return;
};

module.exports = { help };