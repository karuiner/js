/*
 *
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  let s = 0;
  for (let i of `${num}`.split("")) {
    s += Number(i);
  }

  return s < 10 ? s : addDigits(s);
};
// Runtime: 88 ms, faster than 95.19% of JavaScript online submissions for Add Digits.
// Memory Usage: 40.9 MB, less than 7.46% of JavaScript online submissions for Add Digits.
