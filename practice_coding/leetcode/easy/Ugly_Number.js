/*
 *
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  let s = [2, 3, 5],
    ans = true;
  if (n <= 0) {
    return false;
  }
  while (n > 1) {
    let check = false;
    for (let i of s) {
      if (n % i === 0) {
        n = n / i;
        check = true;
        break;
      }
    }
    if (!check) {
      ans = false;
      break;
    }
  }
  return ans;
};

// Runtime: 84 ms, faster than 81.28% of JavaScript online submissions for Ugly Number.
// Memory Usage: 40.3 MB, less than 47.87% of JavaScript online submissions for Ugly Number.
