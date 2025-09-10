/*
 * Selector matches - function to use 'matches' for event delegation
*/

const fn = (el, selector) => {
	const p = Element.prototype;
  var f = p.matches || p.webkitMatchesSelector || p.msMatchesSelector
	return f.call(el, selector);
}

export { fn as selectorMatches }
