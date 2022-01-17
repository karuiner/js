/*
 *
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let k = 1,
    ans = 1;
  if (k % 2 === 0) {
    k = k / 2;
  } else {
    k = n / 2 + (k - 1) / 2;
  }
  while (k !== 1) {
    if (k % 2 === 0) {
      k = k / 2;
    } else {
      k = n / 2 + (k - 1) / 2;
    }
    ans++;
  }
  return ans;
};

// Runtime: 92 ms, faster than 80.00% of JavaScript online submissions for Minimum Number of Operations to Reinitialize a Permutation.
// Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Operations to Reinitialize a Permutation.
