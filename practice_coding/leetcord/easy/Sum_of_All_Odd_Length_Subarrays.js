/*
 *
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let l = arr.length,
        ans = 0;
    let p = l % 2 ? l : l - 1;
    while (p > 0) {
        for (let i = 0; i < l - (p - 1); i++) {
            ans += arr.slice(i, i + p).reduce((x, y) => x + y);
        }
        p -= 2;
    }
    return ans;
};
//Runtime: 80 ms, faster than 81.94% of JavaScript online submissions for Sum of All Odd Length Subarrays.
//Memory Usage: 44.2 MB, less than 27.91% of JavaScript online submissions for Sum of All Odd Length Subarrays.
