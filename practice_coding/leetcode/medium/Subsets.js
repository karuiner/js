/*
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let ans = [],
    n = nums.length;

  function f(nums, p, n) {
    let ans = [];
    if (n > 0) {
      for (let i = 0; i <= nums.length - n; i++) {
        let snum = [...nums.slice(i + 1)];
        let sub = f(snum, [...p, nums[i]], n - 1);
        ans = [...ans, ...sub];
      }
    } else {
      ans = [p, ...ans];
    }
    return ans;
  }

  for (let i = 0; i <= n; i++) {
    let sub = f(nums, [], i);
    ans = [...ans, ...sub];
  }
  return ans;
};

// Runtime: 68 ms, faster than 97.70% of JavaScript online submissions for Subsets.
// Memory Usage: 41 MB, less than 25.12% of JavaScript online submissions for Subsets.
