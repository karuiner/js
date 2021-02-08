/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let ans = nums[0],
        inum;
    if (nums.length > 1) {
        for (let i = 0; i < nums.length; i++) {
            inum = nums.slice(i);
            inum.reduce(function (x, y) {
                x = x + y;
                ans = x > ans ? x : ans;
                return x;
            }, 0);
        }
    }
    return ans;
};
