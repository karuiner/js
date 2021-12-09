/*
 *
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  let [kx, ky] = king,
    ans = [],
    rs = [];
  for (let [ix, iy] of queens) {
    let [x, y] = [ix - kx, iy - ky];
    let d = (Math.atan2(y, x) * 180) / Math.PI;
    let r = x ** 2 + y ** 2;
    if (d % 45 === 0) {
      let k = d < 0 ? 4 - d / 45 : d / 45;
      if (ans[k] === undefined) {
        ans[k] = [ix, iy];
        rs[k] = r;
      } else if (r < rs[k]) {
        ans[k] = [ix, iy];
        rs[k] = r;
      }
    }
  }

  return ans.filter((x) => x !== undefined);
};

// Runtime: 80 ms, faster than 86.67% of JavaScript online submissions for Queens That Can Attack the King.
// Memory Usage: 42.3 MB, less than 36.67% of JavaScript online submissions for Queens That Can Attack the King.
