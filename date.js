/**
* Adds days to a date object.
*
* @param {Date} date - The date where the function will add the days passed by parameter.
* @param {Number} days - The number of days that will be added to the date object.
*/
var addDays = function (date, days) {
	date.setDate(date.getDate() + days);
};

/**
* Clones a date object.
*
* @param {Date} date - The date which will be cloned.
* @returns {Date} A date object cloned from the source date object.
*/
var clone = function (date) {
    try {
        var copy;

        if (null == date || "object" != typeof date) {
            return date;
        }

        if (date instanceof Date) {
            copy = new Date();
            copy.setTime(date.getTime());
            return copy;
        }
    } catch (ex) {
        throw new Error("An error ocurred cloning the date object");
    }
};

/**
* Creates a list of years from an initial year to the current year passed by parameter.
*
* @param {Number} currentYear - The current year.
* @returns {Array} Array of years.
*/
var getYears = function (currentYear) {
	var years = [],
		initialYear = 2000,
		startYear =  initialYear || 1980;

	while (startYear <= (currentYear + 1)) {
		years.push(startYear++);
	}

	return years;
};

/**
* Gets the sunday of the current week.
*
* @returns {Date} Date object which represents the sunday of the current week.
*/
var getSundayOfCurrentWeek = function () {
	var currentDate = new Date(),
		day = currentDate.getDay(),
		diff = currentDate.getDate() - day + (day == 0 ? -7 : 0); // adjust when day is sunday
	return new Date(currentDate.setDate(diff));
};

/**
* Gets the current week number of the current year.
*
* @returns {Number} Current week number.
*/
var getCurrentWeekNumber = function () {
	var date = new Date();
	date.setHours(0, 0, 0);
	date.setDate(date.getDate() + 4 - (date.getDay() || 7));
	return Math.ceil((((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
};

/**
* Creates a list of years from an initial year to the current year passed by parameter.
*
* @param {Number} year - The year of the month.
* @param {Number} month - The month where we want to have the weeks.
* @returns {Array} Array of weeks by month.
*/
var getWeeksByMonth = function (year, month) {
	var firstDate = new Date(year, month, 1),
		numDays = new Date(year, month + 1, 0).getDate(),
		sunday = new Date(firstDate.setDate(firstDate.getDate() - firstDate.getDay())),
		weeksArray = [new Date(sunday)],
		weeksByMonthArray = [],
		start = 1,
		end = 7 - firstDate.getDay();

	while (start <= numDays) {
		while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
			weeksArray.push(new Date(sunday));
		}

		weeksByMonthArray.push(weeksArray);

		start = end + 1;
		end = end + 7;
		firstDate = new Date(year, month, start);
		sunday = new Date(firstDate.setDate(firstDate.getDate() - firstDate.getDay()));
		weeksArray = [new Date(sunday)];

		if (end > numDays) {
			end = numDays;
		}
	}

	return weeksByMonthArray;
};

//Returns all weeks per month in the year passed by parameter
/**
* Creates a list with all weeks by month in the year passed by parameter.
*
* @param {Number} year - The year which we want the weeks by month.
* @returns {Array} Array of weeks by year.
*/
var getWeeksByYear = function (year) {
	var weeksByYear = [],
		MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	for (var i = 0; i < MONTHS.length; i++) { //Months
		var weeksByMonth = getWeeksByMonth(year, i);
		for (var j = 0; j < weeksByMonth.length; j++) { //weeksByYear
			weeksByYear.push(weeksByMonth[j]);
		}
	}

	return weeksByYear;
};