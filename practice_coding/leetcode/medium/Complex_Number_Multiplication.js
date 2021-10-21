/*
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
  let [a, bi] = num1.split("+"),
    [c, di] = num2.split("+");
  let b = bi.slice(0, -1),
    d = di.slice(0, -1);
  return `${Number(a) * Number(c) - Number(b) * Number(d)}+${
    Number(a) * Number(d) + Number(b) * Number(c)
  }i`;
};

// Runtime: 81 ms, faster than 6.53% of JavaScript online submissions for Complex Number Multiplication.
// Memory Usage: 38.4 MB, less than 94.43% of JavaScript online submissions for Complex Number Multiplication.
