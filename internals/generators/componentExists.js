/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

import fs from "fs";
import path from "path";

const components = fs.readdirSync(path.join(__dirname, '../../packages'));

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
