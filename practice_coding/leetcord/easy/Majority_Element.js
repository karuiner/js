/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let db = {},
        ans = 0,
        n = nums.length;
    for (let i of nums) {
        db[i] = db[i] !== undefined ? db[i] + 1 : 1;
        if (db[i] >= 0.5 * n) {
            ans = i;
            break;
        }
    }
    return ans;
};
// Runtime: 92 ms, faster than 38.44% of JavaScript online submissions for Majority Element.
// Memory Usage: 42.1 MB, less than 27.40% of JavaScript online submissions for Majority Element.
