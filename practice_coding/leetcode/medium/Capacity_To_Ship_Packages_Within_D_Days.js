/*
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */

// 풀이 시도 1
var shipWithinDays = function (weights, days) {
  let max = 0,
    arr = weights.map((x) => {
      max += x;
      return max;
    }),
    k = 0,
    n = arr.length,
    kk = 0;
  max = Math.floor(max / days) - 1;
  while (k !== days - 1) {
    max++;
    let p = 0;
    k = 0;
    for (let i = 0; i < n; i++) {
      if (arr[i] - p > max) {
        k++;
        p = arr[i - 1];
      }
    }
  }

  return max;
};
