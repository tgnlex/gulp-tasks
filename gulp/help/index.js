const { desc } = require('./description');
const {divider, title} = require('./vars');
const log = console.info;



function help() {
  log(divider);
  log(title);
  log(`1. help    - ${desc.help}`);
  log(`2. greet   - ${desc.greet}`);
  log(`3. version - ${desc.version}`);
  log(`4. copy    - ${desc.copy}`);
  log(`5. hint    - ${desc.hint}`);
  log(divider)
  return;
};

module.exports = { help };