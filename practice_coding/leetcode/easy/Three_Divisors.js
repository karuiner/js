/*
 *
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
  let k = Math.floor(Math.sqrt(n));
  let ans = true;
  if (n / k === k && n > 1) {
    for (let i = 2; i < k; i++) {
      if (n % i === 0) {
        ans = false;
        break;
      }
    }
  } else {
    ans = false;
  }

  return ans;
};

// Runtime: 80 ms, faster than 49.04% of JavaScript online submissions for Three Divisors.
// Memory Usage: 39.1 MB, less than 40.38% of JavaScript online submissions for Three Divisors.
