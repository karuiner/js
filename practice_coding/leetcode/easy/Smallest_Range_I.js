/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var smallestRangeI = function (nums, k) {
  let mn = 20000,
    mx = 0;
  for (let i of nums) {
    if (i + k < mn) {
      mn = i + k;
    }
    if (i - k > mx) {
      mx = i - k;
    }
  }
  return mx > mn ? mx - mn : 0;
};

// Runtime: 82 ms, faster than 62.50% of JavaScript online submissions for Smallest Range I.
// Memory Usage: 44.2 MB, less than 43.75% of JavaScript online submissions for Smallest Range I.

// var smallestRangeI = function(nums, k) {
//     nums.sort((a,b)=>a-b)
//     let mn=nums[0]+k, mx=nums[nums.length -1]-k
//     return mx>mn?mx-mn:0
// };
