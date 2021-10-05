/*
 *
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
    let a = 0,
        b = 0;
    for (let i of gain) {
        a += i;
        b = a > b ? a : b;
    }
    return b;
};

//Runtime: 68 ms, faster than 97.20% of JavaScript online submissions for Find the Highest Altitude.
//Memory Usage: 38.8 MB, less than 27.01% of JavaScript online submissions for Find the Highest Altitude.
