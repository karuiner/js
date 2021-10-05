/*
 *
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  let k = 1;
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < Math.floor(Math.sqrt(num)) + 1; i++) {
    if (num % i === 0) {
      k += i + num / i;
    }
  }
  return num === k;
};

// Runtime: 96 ms, faster than 83.88% of JavaScript online submissions for Perfect Number.
// Memory Usage: 38.2 MB, less than 94.03% of JavaScript online submissions for Perfect Number.
