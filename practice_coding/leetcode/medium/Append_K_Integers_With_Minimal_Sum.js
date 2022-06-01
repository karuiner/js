/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var minimalKSum = function (nums, k) {
  let s = 0,
    y = 0;
  nums.sort((a, b) => a - b);
  nums.forEach((x) => {
    if (x <= k && x > y) {
      y = x;
      k++;
      s += x;
    }
  });

  return (k * (k + 1)) / 2 - s;
};

// Runtime: 194 ms, faster than 74.47% of JavaScript online submissions for Append K Integers With Minimal Sum.
// Memory Usage: 54.6 MB, less than 97.87% of JavaScript online submissions for Append K Integers With Minimal Sum.

// var minimalKSum = function (nums, k) {
//   let s = 0,
//     db = {};
//   nums.sort((a, b) => a - b);
//   nums.forEach((x) => {
//     if (x <= k && db[x] === undefined) {
//       db[x] = true;
//       k++;
//       s += x;
//     }
//   });

//   return (k * (k + 1)) / 2 - s;
// };

// Runtime: 284 ms, faster than 21.28% of JavaScript online submissions for Append K Integers With Minimal Sum.
// Memory Usage: 66 MB, less than 51.06% of JavaScript online submissions for Append K Integers With Minimal Sum.
