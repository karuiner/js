/*
 *
 * @param {number} p
 * @param {number} q
 * @return {number}
 */
var mirrorReflection = function (p, q) {
  let r = q / p,
    n = 1;
  while (Math.floor(n * r) !== n * r) {
    n++;
  }
  if (n % 2 == 0) {
    return 2;
  } else if ((n * r) % 2 === 0) {
    return 0;
  } else {
    return 1;
  }
};

// Runtime: 111 ms, faster than 20.00% of JavaScript online submissions for Mirror Reflection.
// Memory Usage: 39.4 MB, less than 20.00% of JavaScript online submissions for Mirror Reflection.
