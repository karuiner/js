/*
 *
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let rl = 1,
    cl = 1,
    t = "A",
    ans = [[rStart, cStart]],
    n = rows * cols,
    r = rStart,
    c = cStart;

  while (ans.length < n) {
    if (t === "A" || t === "B") {
      let k = t === "A" ? 1 : -1;
      for (let i = 0; i < rl; i++) {
        c += k;
        if (c >= 0 && c < cols && r >= 0 && r < rows) {
          ans.push([r, c]);
        }
      }
      rl++;
      t = t === "A" ? "C" : "D";
    } else {
      let k = t === "C" ? 1 : -1;
      for (let i = 0; i < cl; i++) {
        r += k;
        if (c >= 0 && c < cols && r >= 0 && r < rows) {
          ans.push([r, c]);
        }
      }
      cl++;
      t = t === "C" ? "B" : "A";
    }
  }
  return ans;
};

// Runtime: 104 ms, faster than 100.00% of JavaScript online submissions for Spiral Matrix III.
// Memory Usage: 46.1 MB, less than 71.43% of JavaScript online submissions for Spiral Matrix III.
