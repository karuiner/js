/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let ans = [],
    c = 0,
    d = 0;
  for (let i of nums) {
    if (i === target) {
      d++;
      c++;
    } else if (i < target) {
      c++;
    }
  }
  for (let i = c - d; i < c; i++) {
    ans.push(i);
  }
  return ans;
};

// Runtime: 64 ms, faster than 99.03% of JavaScript online submissions for Find Target Indices After Sorting Array.
// Memory Usage: 44 MB, less than 8.54% of JavaScript online submissions for Find Target Indices After Sorting Array.
