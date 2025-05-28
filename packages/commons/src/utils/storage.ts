const dict = new Map<string, string>();

/**
 * Get item from the storage
 *
 * @param {string} key name of the item
 * @returns {string} value of the item
 */
const get = (key: string): string => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key) || '';
  } else {
    return dict.get(key) || '';
  }
};

/**
 * Set item to the storage
 *
 * @param {string} key name of the item
 * @param {string} value value of the item
 */
const set = (key: string, value: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value);
  } else {
    dict.set(key, value);
  }
};

/**
 * Delete item from the storage
 *
 * @param {string} key name of the item
 */
const remove = (key: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key);
  } else {
    dict.delete(key);
  }
};

/**
 * Clears the storage
 *
 */
const clear = () => {
  if (typeof window !== 'undefined') {
    localStorage.clear();
  } else {
    dict.clear();
  }
};

/**
 * Gets the size of the storage
 *
 * @returns {number} size of the storage
 */
const size = (): number => {
  if (typeof window !== 'undefined') {
    return localStorage.length;
  } else {
    return dict.size;
  }
};

export default {
  clear,
  get,
  remove,
  set,
  size,
};
