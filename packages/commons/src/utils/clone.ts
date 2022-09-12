/**
 * Clones properties to new object
 *
 * @template T
 * @param {T} obj object copy only properties to new object
 * @returns {T} cloned object
 */
const props = <T>(obj: T): T => Object.assign({}, obj);

/**
 * Clones properties and methods (prototype) to new object
 *
 * @template T
 * @param {T} obj object copy only properties to new object
 * @returns {T} cloned object
 */
const deep = <T>(obj: T): T => Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);

const clone = {
  deep,
  props,
};

export default clone;
