/*
 *
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let x = 0,
    y = 1,
    z = 1,
    i = 2;
  if (n < 3) {
    return n === 0 ? 0 : 1;
  } else {
    while (n > i) {
      [x, y, z] = [y, z, x + y + z];
      i++;
    }
  }
  return z;
};
//Runtime: 80 ms, faster than 34.18% of JavaScript online submissions for N-th Tribonacci Number.
//Memory Usage: 38.7 MB, less than 18.35% of JavaScript online submissions for N-th Tribonacci Number.
