/*
 *
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function (n, k) {
  let s = -1,
    arr = Array(n)
      .fill(0)
      .map((x, i) => i + 1);
  while (n > 1) {
    s += k;
    s = s >= n ? s % n : s;
    arr = [...arr.slice(0, s), ...arr.slice(s + 1)];
    s--;
    n--;
  }
  return arr[0];
};

// Runtime: 104 ms, faster than 53.23% of JavaScript online submissions for Find the Winner of the Circular Game.
// Memory Usage: 45.2 MB, less than 11.29% of JavaScript online submissions for Find the Winner of the Circular Game.
