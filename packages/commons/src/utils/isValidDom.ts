/**
 * check if this is a valid document
 *
 * @returns {boolean} true if window is defined with document
 */
const isValidDom = (): boolean => !!(typeof window !== 'undefined' && window.document && window.document.createElement); //NOSONAR

export default isValidDom;
