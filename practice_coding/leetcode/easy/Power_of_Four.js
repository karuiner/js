/*
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n === 0) return false;
  let p = n.toString(4);
  if (p[0] !== "1") return false;
  let l = p.length - 1;
  return Number(p) % 10 ** l === 0;
};
// Runtime: 92 ms, faster than 59.04% of JavaScript online submissions for Power of Four.
// Memory Usage: 40.2 MB, less than 24.58% of JavaScript online submissions for Power of Four.
