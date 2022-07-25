/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');

module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
};
