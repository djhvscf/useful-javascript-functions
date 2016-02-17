/**
* Adds a new function to the date javascript object where the function will add days. This function modifies the source object.
*
* @param {Number} days - The number of days that will be added to the date object.
*/
Date.prototype.addDays = function (days) {
    this.setDate(this.getDate() + days);
};