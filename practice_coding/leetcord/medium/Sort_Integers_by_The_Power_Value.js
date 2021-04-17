/*
 *
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
  function power(n) {
    let c = 0;
    while (n > 1) {
      if (n % 2) {
        n = 3 * n + 1;
      } else {
        n = n / 2;
      }
      c++;
    }
    return c;
  }
  let values = [];
  for (let i = lo; i <= hi; i++) {
    values.push([i, power(i)]);
  }
  values.sort((a, b) => a[1] - b[1]);
  return values[k - 1][0];
};
//Runtime: 104 ms, faster than 98.33% of JavaScript online submissions for Sort Integers by The Power Value.
//Memory Usage: 44.7 MB, less than 34.17% of JavaScript online submissions for Sort Integers by The Power Value.
