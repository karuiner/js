/*
 *
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  let ans = 0;
  while (n > 1) {
    if (n % 2 === 0) {
      ans += 2;
      n = n / 2;
    } else {
      for (let i = Math.ceil(n / 2); i >= 1; i--) {
        if (n % i === 0) {
          ans += n / i;
          n = i;
          break;
        }
      }
    }
  }
  return ans;
};

// Runtime: 76 ms, faster than 83.05% of JavaScript online submissions for 2 Keys Keyboard.
// Memory Usage: 38.6 MB, less than 91.53% of JavaScript online submissions for 2 Keys Keyboard.
