/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = 0,
    n = nums.length;
  for (let i = 0; i < n / 2; i++) {
    let v = nums[i] + nums[n - 1 - i];
    if (v > ans) {
      ans = v;
    }
  }

  return ans;
};

// Runtime: 332 ms, faster than 72.00% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
// Memory Usage: 54.8 MB, less than 93.71% of JavaScript online submissions for Minimize Maximum Pair Sum in Array.
