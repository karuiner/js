/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (ans.length < i + 1) {
        if (nums[j] > nums[i]) {
          ans.push(nums[j]);
          break;
        }
      } else {
        break;
      }
    }
    for (let j = 0; j < i; j++) {
      if (ans.length < i + 1) {
        if (nums[j] > nums[i]) {
          ans.push(nums[j]);
          break;
        }
      } else {
        break;
      }
    }
    if (ans.length < i + 1) {
      ans.push(-1);
    }
  }
  return ans;
};

// Runtime: 136 ms, faster than 49.58% of JavaScript online submissions for Next Greater Element II.
// Memory Usage: 45.2 MB, less than 52.37% of JavaScript online submissions for Next Greater Element II.
