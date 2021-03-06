/**
 * Searches the index of an object in an array of objects.
 *
 * @param {Array} array - The array where the function will search.
 * @param {String} searchTerm - The string that the function needs to find in the array of objects.
 * @param {String} property - The property of an object where the function will search.
 * @returns {Number} If the object was found the functions returns a number greater than -1; otherwise, the function returns -1.
 */
var indexOf = function (array, searchTerm, property) {
	for (var i = 0, len = array.length; i < len; i++) {
		if (array[i][property] === searchTerm) {
			return i;
		}
	}
	return -1;
};
	
/**
 * Searches the last index of an object in an array of objects.
 *
 * @param {Array} array - The array where the function will search.
 * @param {String} searchTerm - The string that the function needs to find in the array of objects.
 * @param {String} property - The property of an object where the function will search.
 * @param {String} alternativeProperty - The alternative property of an object where the function will search.
 * @returns {Number} If the object was found the functions returns a number greater than -1; otherwise, the function returns -1.
 */
var lastIndexOf = function (array, searchTerm, property, alternativeProperty) {
	for (var i = array.length - 1 ; i >= 0 ; i--) {
		if (array[i][property] === searchTerm) {
			return i;
		} else if (array[i][alternativeProperty] === searchTerm) {
			return i;
		}
	}
	return -1;
};
	
/**
 * Returns the duplicated objects in an array of objects. If the removeDuplicatedObjects is set to true the function will delete the duplicate objects from the source array.
 *
 * @param {Array} array - The array where the function will search the duplicated items.
 * @param {String} field - The property of an object where the function will search.
 * @param {Boolean} removeDuplicatedObjects - True: remove the duplicated objects from the source array; otherwise, the function does not delete the duplicated objects from the source array.
 * @returns {Array} Array with the duplicated objects found in the source array.
 */	
var getDuplicatedObjects = function (array, field, removeDuplicatedObjects) {
	var processed = [],
		duplicated = [];
	for (var i = 0; i < array.length; i++) {
		if (array[i].hasOwnProperty(field)) {
			if (processed.indexOf(array[i][field]) < 0) {
				processed.push(array[i][field]);
			} else {
				duplicated.push(array[i]);
				if (removeDuplicatedObjects) {
					array.splice(i, 1);
				}
			}
		}
	}
	return duplicated;
};

/**
 * Creates a new array with all elements that pass the test implemented by the provided function..
 *
 * @param {Function} fun - Function to test each element of the array. Invoked with arguments (element, index, array). Return true to keep the element, false otherwise.
 * @param {Object} thisArg - Optional. Value to use as this when executing callback.
 * @returns {Array} Array filtered.
 */	
var filterFn = function () {
	if (!Array.prototype.filter) {
		Array.prototype.filter = function(fun/*, thisArg*/) {
			'use strict';

			if (this === void 0 || this === null) {
				throw new TypeError();
			}

			var t = Object(this);
			var len = t.length >>> 0;
			if (typeof fun !== 'function') {
				throw new TypeError();
			}

			var res = [];
			var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
			for (var i = 0; i < len; i++) {
				if (i in t) {
					var val = t[i];

					// NOTE: Technically this should Object.defineProperty at
					//       the next index, as push can be affected by
					//       properties on Object.prototype and Array.prototype.
					//       But that method's new, and collisions should be
					//       rare, so use the more-compatible alternative.
					if (fun.call(thisArg, val, i, t)) {
						res.push(val);
					}
				}
			}

			return res;
		};
	}
};