/*
 *
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (firstList, secondList) {
  let ans = [];
  for (let [a, b] of firstList) {
    for (let [c, d] of secondList) {
      if (a > c && d > b) {
        ans.push([a, b]);
      } else if (c >= a && d <= b) {
        ans.push([c, d]);
      } else if (a >= c && a <= d && b >= d) {
        ans.push([a, d]);
      } else if (c <= b && b <= d && a <= c) {
        ans.push([c, b]);
      }
    }
  }
  return ans;
};

// Runtime: 160 ms, faster than 31.63% of JavaScript online submissions for Interval List Intersections.
// Memory Usage: 46.9 MB, less than 10.02% of JavaScript online submissions for Interval List Intersections.
