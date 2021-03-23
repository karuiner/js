/*
 *
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
    let i = new Date(`${month} ${day} ${year}`).getDay();
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return week[i];
};
//Runtime: 72 ms, faster than 90.17% of JavaScript online submissions for Day of the Week.
//Memory Usage: 38.9 MB, less than 23.70% of JavaScript online submissions for Day of the Week.
