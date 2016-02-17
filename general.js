/**
* Gets if the browser is IE or not.
*
* @returns {Boolean} True: the browser is IE; otherwise, false.
*/
var isIEBrowser = function () {
	return !!(navigator.userAgent.indexOf("MSIE ") > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
};