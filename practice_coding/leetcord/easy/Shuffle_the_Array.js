/*
 *
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
// var shuffle = function(nums, n) {
//     let ans=[]
//     for (let i=0;i< n;i++){
//         ans.push(nums[i],nums[n+i])
//     }
//     return ans
// };
//Runtime: 88 ms, faster than 70.45% of JavaScript online submissions for Shuffle the Array.
//Memory Usage: 41 MB, less than 12.55% of JavaScript online submissions for Shuffle the Array.
var shuffle = function (nums, n) {
    for (let i = 0; i < n; i++) {
        nums.splice(2 * i + 1, 0, nums.splice(nums.length - n + i, 1));
    }
    return nums;
};
//Runtime: 92 ms, faster than 45.99% of JavaScript online submissions for Shuffle the Array.
//Memory Usage: 41 MB, less than 12.55% of JavaScript online submissions for Shuffle the Array.
