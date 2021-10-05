/*
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getStrongest = function (arr, k) {
  arr.sort((a, b) => b - a);
  let p = arr[arr.length % 2 === 0 ? arr.length / 2 : (arr.length - 1) / 2];
  arr.sort((a, b) => {
    if (Math.abs(a - p) === Math.abs(b - p)) {
      return a > b ? -1 : 1;
    } else if (Math.abs(a - p) > Math.abs(b - p)) {
      return -1;
    } else {
      return 1;
    }
  });

  return arr.slice(0, k);
};

// Runtime: 312 ms, faster than 59.38% of JavaScript online submissions for The k Strongest Values in an Array.
// Memory Usage: 62.5 MB, less than 59.38% of JavaScript online submissions for The k Strongest Values in an Array.
