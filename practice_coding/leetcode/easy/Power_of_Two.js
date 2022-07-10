/*
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n >= 1) {
    let s = n.toString(2);
    let k = Number(s.slice(1));
    return k === 0 ? true : false;
  } else {
    return false;
  }
};

// Runtime: 124 ms, faster than 26.67% of JavaScript online submissions for Power of Two.
// Memory Usage: 43.3 MB, less than 75.67% of JavaScript online submissions for Power of Two.
