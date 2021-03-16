/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let ans = 0;
    for (let i of nums) {
        if (!(String(i).length % 2)) ans += 1;
    }
    return ans;
};
//Runtime: 84 ms, faster than 57.99% of JavaScript online submissions for Find Numbers with Even Number of Digits.
//Memory Usage: 39.6 MB, less than 32.39% of JavaScript online submissions for Find Numbers with Even Number of Digits.
