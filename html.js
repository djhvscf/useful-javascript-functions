/**
* Gets if the browser is IE or not.
*
* @returns {Boolean} True: the browser is IE; otherwise, false.
*/
var isIEBrowser = function () {
	return !!(navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
};

/**
* Replaces some HTML characters to the correct ones.
*
* @param {String} text - The string that will be replaced.
* @returns {String} The text replaced.
*/
var escapeHTML = function (text) {
	if (typeof text === 'string') {
		return text
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&#039;')
			.replace(/`/g, '&#x60;');
	}
	return text;
};