/*
 *
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
// 풀이 완료
var shipWithinDays = function (weights, days) {
  let max = Math.max(...weights) - 1,
    s = 0,
    k = days,
    n = weights.length;
  while (k > days - 1) {
    max++;
    let s = 0;
    k = 0;
    for (let i = 0; i < n; i++) {
      if (s + weights[i] > max) {
        k++;
        s = weights[i];
      } else {
        s += weights[i];
      }
    }
  }

  return max;
};

// Runtime: 1410 ms, faster than 5.58% of JavaScript online submissions for Capacity To Ship Packages Within D Days.
// Memory Usage: 45.7 MB, less than 39.44% of JavaScript online submissions for Capacity To Ship Packages Within D Days.

// 풀이 시도 1
// var shipWithinDays = function (weights, days) {
//   let max = 0,
//     arr = weights.map((x) => {
//       max += x;
//       return max;
//     }),
//     k = 0,
//     n = arr.length,
//     kk = 0;
//   max = Math.floor(max / days) - 1;
//   while (k !== days - 1) {
//     max++;
//     let p = 0;
//     k = 0;
//     for (let i = 0; i < n; i++) {
//       if (arr[i] - p > max) {
//         k++;
//         p = arr[i - 1];
//       }
//     }
//   }

//   return max;
// };
