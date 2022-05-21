/*
 *
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  let db = {};
  for (let i of arr) {
    if (db[i] === undefined) {
      db[i] = 1;
    } else {
      db[i]++;
    }
  }
  let ans = "",
    c = 0;
  for (let i of arr) {
    if (db[i] === 1) {
      c++;
      if (c === k) {
        ans = i;
        break;
      }
    }
  }
  return ans;
};

// Runtime: 86 ms, faster than 76.54% of JavaScript online submissions for Kth Distinct String in an Array.
// Memory Usage: 45.4 MB, less than 44.62% of JavaScript online submissions for Kth Distinct String in an Array.
