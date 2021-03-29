/*
 *
 * @param {number} n
 * @return {string}
 */
var generateTheString = function (n) {
    if (n % 2) {
        return "".padStart(n, "a");
    } else {
        return "".padStart(n - 1, "a") + "b";
    }
};
//Runtime: 76 ms, faster than 83.68% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
//Memory Usage: 38.6 MB, less than 77.08% of JavaScript online submissions for Generate a String With Characters That Have Odd Counts.
