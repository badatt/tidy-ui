const isValidDom = !!(typeof window !== 'undefined' && window.document && window.document.createElement); //NOSONAR

export default isValidDom;
