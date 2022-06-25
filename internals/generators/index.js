/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

import componentGenerator from "./component/index.js";

module.exports = (plop) => {
  plop.setGenerator("component", componentGenerator);
};
