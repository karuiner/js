/*
 *
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 * };
 */

/*
 *
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  let db = {};
  function get(k, z) {
    let a = 1,
      b = 1000;
    if (customfunction.f(k, a) === z) b = a;
    if (customfunction.f(k, b) === z) a = b;
    while (b - a > 1) {
      let m = parseInt((a + b) / 2);
      if (customfunction.f(k, m) <= z) {
        a = m;
      } else {
        b = m;
      }
    }
    return a;
  }

  for (let i = 1; i < 1000; i++) {
    b = get(i, z);

    if (customfunction.f(i, b) === z) db[i] = b;
    if (customfunction.f(b, i) === z) db[b] = i;
  }
  let ans = [];
  for (let i in db) {
    ans.push([Number(i), db[i]]);
  }
  return ans;
};
//Runtime: 168 ms, faster than 24.14% of JavaScript online submissions for Find Positive Integer Solution for a Given Equation.
//Memory Usage: 45.1 MB, less than 5.75% of JavaScript online submissions for Find Positive Integer Solution for a Given Equation.
