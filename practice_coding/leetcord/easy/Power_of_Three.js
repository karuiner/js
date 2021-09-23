/*
 *
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n < 1) {
    return false;
  }
  let k = Math.log((Math.log(n) / Math.log(3)) % 1) / Math.log(10);
  return k < -14 ? true : false;
};

// Runtime: 204 ms, faster than 79.12% of JavaScript online submissions for Power of Three.
// Memory Usage: 47.9 MB, less than 98.80% of JavaScript online submissions for Power of Three.
