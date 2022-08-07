/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');

/**
 * exports the generator
 *
 * @param {any} plop plop
 */
module.exports = (plop) => {
  plop.setGenerator('component', componentGenerator);
};
