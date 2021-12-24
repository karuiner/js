/*
 *
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  function f(s, n, com, k) {
    let ans = [];
    for (let i = s; i < 10; i++) {
      if (k === 1 && n - i === 0) {
        ans.push([...com, i]);
      } else if (k > 1 && n - i > i) {
        let sub = f(i + 1, n - i, [...com, i], k - 1);
        ans = ans.concat(sub);
      } else if (k > 1 && n - i < i + 1) {
        break;
      }
    }
    return ans;
  }

  return f(1, n, [], k);
};

// Runtime: 76 ms, faster than 56.13% of JavaScript online submissions for Combination Sum III.
// Memory Usage: 40.2 MB, less than 30.97% of JavaScript online submissions for Combination Sum III.
