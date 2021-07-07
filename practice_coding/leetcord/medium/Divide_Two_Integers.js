/*
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let a = dividend < 0 ? 1 : 0,
    b = divisor < 0 ? 1 : 0;
  let x = dividend / divisor;
  return a ^ (b === 1)
    ? x < -(2 ** 31)
      ? -(2 ** 31)
      : Math.ceil(x)
    : x >= 2 ** 31
    ? 2 ** 31 - 1
    : Math.floor(x);
};
// Runtime: 88 ms, faster than 89.19% of JavaScript online submissions for Divide Two Integers.
// Memory Usage: 40.1 MB, less than 81.61% of JavaScript online submissions for Divide Two Integers.
