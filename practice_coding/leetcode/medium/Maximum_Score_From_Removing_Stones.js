/*
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  let m = a,
    x = b,
    y = c;
  if (x > m) {
    [m, x] = [x, m];
  }
  if (y > m) {
    [m, y] = [y, m];
  }
  if (x + y >= m) {
    return m + Math.floor((x + y - m) / 2);
  } else {
    return x + y;
  }
};

// Runtime: 78 ms, faster than 55.56% of JavaScript online submissions for Maximum Score From Removing Stones.
// Memory Usage: 38.7 MB, less than 88.89% of JavaScript online submissions for Maximum Score From Removing Stones.
