/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let ans = [],
        a = 0,
        b = 1,
        l = nums.length;
    while (b < l) {
        for (let i = 0; i < nums[a]; i++) {
            ans.push(nums[b]);
        }
        [a, b] = [a + 2, b + 2];
    }
    return ans;
};
//Runtime: 92 ms, faster than 90.45% of JavaScript online submissions for Decompress Run-Length Encoded List.
//Memory Usage: 42.3 MB, less than 64.32% of JavaScript online submissions for Decompress Run-Length Encoded List.
