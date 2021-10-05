/*
 *
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
    let ans = start;
    for (let i = 1; i < n; i++) {
        ans = ans ^ (start + i * 2);
    }
    return ans;
};
//Runtime: 76 ms, faster than 80.66% of JavaScript online submissions for XOR Operation in an Array.
//Memory Usage: 38.6 MB, less than 34.88% of JavaScript online submissions for XOR Operation in an Array.
