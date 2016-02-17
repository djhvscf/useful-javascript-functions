/**
* Replaces the "%s" string with the respective parameter.
*
* @param {String} str - The string that the function will replace with the parameters passed.
* @returns {String} If the parameters are not passed to the function, it will returns an empty string; otherwise, the function returns the string replaced.
*/
var sprintf = function (str) {
        var args = arguments,
            flag = true,
            i = 1;

        str = str.replace(/%s/g, function () {
            var arg = args[i++];

            if (typeof arg === 'undefined') {
                flag = false;
                return '';
            }
            return arg;
        });
        return flag ? str : '';
    };