/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  let use = nums.filter((x) => x <= target),
    stack = Array(target).fill(0);
  for (let i of use) {
    stack[i - 1] = 1;
  }
  for (let i = 0; i < target; i++) {
    for (let j of use) {
      if (i + 1 + j <= target) {
        stack[i + j] += stack[i];
      }
    }
  }
  return stack[target - 1];
};

// Runtime: 88 ms, faster than 27.84% of JavaScript online submissions for Combination Sum IV.
// Memory Usage: 40.4 MB, less than 42.78% of JavaScript online submissions for Combination Sum IV.
