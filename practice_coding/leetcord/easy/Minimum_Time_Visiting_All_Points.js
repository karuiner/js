/*
 *
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let x = points[0],
        ans = 0;
    for (let i of points.slice(1)) {
        let a = Math.abs(x[0] - i[0]);
        let b = Math.abs(x[1] - i[1]);
        ans += a > b ? b : a;
        ans += Math.abs(a - b);
        x = i;
    }
    return ans;
};
//Runtime: 84 ms, faster than 68.02% of JavaScript online submissions for Minimum Time Visiting All Points.
//Memory Usage: 39.8 MB, less than 86.90% of JavaScript online submissions for Minimum Time Visiting All Points.
