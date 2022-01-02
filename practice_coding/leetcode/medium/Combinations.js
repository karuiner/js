/*
 *
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  function f(arr, s, k) {
    let ans = [];
    if (k > 1) {
      for (let i = s; i <= n - k + 1; i++) {
        let sub = f([...arr, i], i + 1, k - 1);
        ans = ans.concat(sub);
      }
    } else {
      for (let i = s; i <= n; i++) {
        ans.push([...arr, i]);
      }
    }
    return ans;
  }

  return f([], 1, k);
};

// Runtime: 234 ms, faster than 17.65% of JavaScript online submissions for Combinations.
// Memory Usage: 47.2 MB, less than 32.53% of JavaScript online submissions for Combinations.
