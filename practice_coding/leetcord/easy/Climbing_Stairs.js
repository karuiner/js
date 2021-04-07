/*
 *
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let [x, y] = [1, 2];
  if (n === 1) return 1;
  if (n === 2) return 2;
  for (let i = 2; i < n; i++) {
    [x, y] = [y, x + y];
  }
  return y;
};

//Runtime: 84 ms, faster than 12.46% of JavaScript online submissions for Climbing Stairs.
//Memory Usage: 38.7 MB, less than 19.52% of JavaScript online submissions for Climbing Stairs.
