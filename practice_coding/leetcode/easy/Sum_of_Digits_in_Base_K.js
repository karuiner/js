/*
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {
  let ans = 0;
  while (n >= k) {
    let c = n % k;
    ans += c;
    n = Math.floor((n - c) / k);
  }
  return ans + n;
};

// Runtime: 102 ms, faster than 37.93% of JavaScript online submissions for Sum of Digits in Base K.
// Memory Usage: 41.4 MB, less than 24.14% of JavaScript online submissions for Sum of Digits in Base K.
