/*
 *
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function (n) {
  let c = n % 2 === 0;
  let ans = c ? [] : [0];
  for (let i = 0; i < Math.floor(n / 2); i++) {
    ans = [...ans, -(i + 1), i + 1];
  }
  return ans;
};

// Runtime: 72 ms, faster than 97.97% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 44.5 MB, less than 6.31% of JavaScript online submissions for Find N Unique Integers Sum up to Zero.
