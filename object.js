/**
* Compares tow objects in order to know if they are the same .
*
* @param {Object} objectA - Object to compare.
* @param {Object} objectB - Object to compare.
* @returns {Boolean} True: the objects are equivalent; otherwise, false.
*/
var compareObjects = function (objectA, objectB, compareLength) {
	// Create arrays of property names
	var objectAProperties = Object.getOwnPropertyNames(objectA),
		objectBProperties = Object.getOwnPropertyNames(objectB),
		propName = '';

	if (compareLength) {
		// If number of properties is different, objects are not equivalent
		if (objectAProperties.length !== objectBProperties.length) {
			return false;
		}
	}

	for (var i = 0; i < objectAProperties.length; i++) {
		propName = objectAProperties[i];

		// If the property is not in the object B properties, continue with the next property
		if ($.inArray(propName, objectBProperties) > -1) {
			// If values of same property are not equal, objects are not equivalent
			if (objectA[propName] !== objectB[propName]) {
				return false;
			}
		}
	}

	// If we made it this far, objects are considered equivalent
	return true;
};