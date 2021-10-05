/*
 *
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {
    let ans = [];
    nums.forEach((x, i) => {
        ans.splice(index[i], 0, x);
    });
    return ans;
};
//Runtime: 72 ms, faster than 93.58% of JavaScript online submissions for Create Target Array in the Given Order.
//Memory Usage: 38.5 MB, less than 77.22% of JavaScript online submissions for Create Target Array in the Given Order.
