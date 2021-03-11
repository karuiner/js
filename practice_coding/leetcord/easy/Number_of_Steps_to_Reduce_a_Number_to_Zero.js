/*
 *
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    let ans = 0;
    while (num > 0) {
        num = num % 2 ? num - 1 : num / 2;
        ans++;
    }
    return ans;
};
//Runtime: 76 ms, faster than 86.57% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
//Memory Usage: 38.8 MB, less than 22.11% of JavaScript online submissions for Number of Steps to Reduce a Number to Zero.
