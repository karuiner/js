/*
 *
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function (n, startPos, s) {
  let ans = [],
    l = s.length;
  for (let i = 0; i < l; i++) {
    let [y, x] = startPos,
      c = 0;
    for (let j of s.slice(i)) {
      if (j === "U") {
        y--;
      } else if (j === "D") {
        y++;
      } else if (j === "R") {
        x++;
      } else {
        x--;
      }
      if (x < 0 || x >= n || y < 0 || y >= n) {
        break;
      }
      c++;
    }
    ans[i] = c;
  }
  return ans;
};

// Runtime: 188 ms, faster than 54.72% of JavaScript online submissions for Execution of All Suffix Instructions Staying in a Grid.
// Memory Usage: 43.1 MB, less than 43.40% of JavaScript online submissions for Execution of All Suffix Instructions Staying in a Grid.
