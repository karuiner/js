/*
 *
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  let ans = [],
    ci = -1,
    cj = 0;
  for (let i of s.split(" ")) {
    ci++;
    i.split("").forEach((x, j) => {
      if (ans[j] === undefined) {
        ans[j] = x.padStart(ci + 1, " ");
      } else {
        ans[j] += x.padStart(ci + 1 - ans[j].length, " ");
      }
    });
  }

  return ans;
};

// Runtime: 76 ms, faster than 39.02% of JavaScript online submissions for Print Words Vertically.
// Memory Usage: 38.5 MB, less than 85.37% of JavaScript online submissions for Print Words Vertically.
