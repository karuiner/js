/*
 *
 * @param {number[][]} points
 * @param {number[][]} queries
 * @return {number[]}
 */
var countPoints = function (points, queries) {
  let ans = [];
  let calr = (a, b) => Math.sqrt((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2);
  for (let [x, y, r] of queries) {
    let k = 0;
    for (let [x1, y1] of points) {
      if (calr([x, y], [x1, y1]) <= r) {
        k++;
      }
    }
    ans.push(k);
  }
  return ans;
};
//Runtime: 164 ms, faster than 39.24% of JavaScript online submissions for Queries on Number of Points Inside a Circle.
//Memory Usage: 47.2 MB, less than 5.70% of JavaScript online submissions for Queries on Number of Points Inside a Circle.
