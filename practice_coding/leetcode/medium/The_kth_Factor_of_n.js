/*
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function (n, k) {
  let a = [],
    b = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      a.push(i);
      if (n / i !== i) {
        b = [n / i, ...b];
      }
    }
  }
  a = [...a, ...b];
  return a[k - 1] !== undefined ? a[k - 1] : -1;
};
// Runtime: 103 ms, faster than 19.12% of JavaScript online submissions for The kth Factor of n.
// Memory Usage: 39.9 MB, less than 23.82% of JavaScript online submissions for The kth Factor of n.
