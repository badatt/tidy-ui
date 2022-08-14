/**
 * Generates a random guid
 *
 * @returns {string} random guid
 */
const guid = (): string => {
  return Math.random().toString(36).substring(2, 12);
};

export default guid;
