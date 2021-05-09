/*
 *
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let seq = {};
  while (n !== 1 && seq[n] === undefined) {
    seq[n] = 1;
    let k = 0;
    for (let i of String(n)) {
      k += Number(i) ** 2;
    }
    n = k;
  }
  return n === 1;
};
//Runtime: 96 ms, faster than 31.73% of JavaScript online submissions for Happy Number.
//Memory Usage: 40.7 MB, less than 34.79% of JavaScript online submissions for Happy Number.
