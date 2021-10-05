/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums.sort((x, y) => x - y);
    let ans = 0;
    for (let i = 0; i < nums.length / 2; i++) {
        ans += nums[2 * i] < nums[2 * i + 1] ? nums[2 * i] : nums[2 * i + 1];
    }
    return ans;
};
//Runtime: 124 ms, faster than 93.52% of JavaScript online submissions for Array Partition I.
//Memory Usage: 44.3 MB, less than 56.02% of JavaScript online submissions for Array Partition I.
