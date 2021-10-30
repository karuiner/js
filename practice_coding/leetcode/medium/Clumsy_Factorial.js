/*
 *
 * @param {number} n
 * @return {number}
 */
var clumsy = function (n) {
  let ans = 0;
  for (let i = n; i > 0; i = i - 4) {
    let k = i;
    if (i > 1) {
      k = k * (i - 1);
    }
    if (i > 2) {
      k = Math.floor(k / (i - 2));
    }
    if (i !== n) {
      k = -k;
    }
    if (i > 3) {
      k += i - 3;
    }
    ans += k;
  }
  return ans;
};

// Runtime: 144 ms, faster than 26.67% of JavaScript online submissions for Clumsy Factorial.
// Memory Usage: 38.9 MB, less than 66.67% of JavaScript online submissions for Clumsy Factorial.
