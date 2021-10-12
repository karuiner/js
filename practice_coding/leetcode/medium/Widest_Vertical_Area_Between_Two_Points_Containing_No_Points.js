/*
 *
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function (points) {
  let k = 0;
  points.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < points.length - 1; i++) {
    let a = points[i][0],
      b = points[i + 1][0];
    if (b - a > k) {
      k = b - a;
    }
  }
  return k;
};

// Runtime: 227 ms, faster than 60.56% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
// Memory Usage: 69.8 MB, less than 16.90% of JavaScript online submissions for Widest Vertical Area Between Two Points Containing No Points.
