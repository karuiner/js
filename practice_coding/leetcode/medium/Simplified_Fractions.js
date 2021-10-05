/*
 *
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  let ans = [],
    db = {};
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      for (let j = 1; j < i; j++) {
        if (!db[j / i]) {
          db[j / i] = `${j}/${i}`;
          ans.push(`${j}/${i}`);
        }
      }
    }
  }

  return ans;
};

// Runtime: 192 ms, faster than 26.47% of JavaScript online submissions for Simplified Fractions.
// Memory Usage: 51 MB, less than 11.76% of JavaScript online submissions for Simplified Fractions.
