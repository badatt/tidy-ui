/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');
const components = fs.readdirSync(path.join(__dirname, '../../packages'));

/**
 * Returns true if a package already exists under packages
 *
 * @param {string} comp package name
 * @returns {boolean} `true` if the package exists already
 */
function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
