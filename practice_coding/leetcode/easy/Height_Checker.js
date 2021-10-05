/*
 *
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let b = heights.slice();
  b.sort((a, b) => a - b);
  let ans = 0;
  heights.forEach((x, i) => {
    if (x !== b[i]) {
      ans++;
    }
  });
  return ans;
};

// Runtime: 68 ms, faster than 97.11% of JavaScript online submissions for Height Checker.
// Memory Usage: 38.7 MB, less than 51.89% of JavaScript online submissions for Height Checker.
