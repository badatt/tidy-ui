const isValidDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

export default isValidDom;
