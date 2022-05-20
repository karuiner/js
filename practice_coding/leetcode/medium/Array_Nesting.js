/*
 *
 * @param {number[]} nums
 * @return {number}
 */

var arrayNesting = function (nums) {
  let n = nums.length,
    dp = Array(n).fill(true),
    ans = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i]) {
      let c = i,
        k = 0;
      while (dp[c]) {
        dp[c] = false;
        c = nums[c];
        k++;
      }
      ans = ans < k ? k : ans;
    }
  }
  return ans;
};
// Runtime: 102 ms, faster than 98.41% of JavaScript online submissions for Array Nesting.
// Memory Usage: 54.2 MB, less than 85.71% of JavaScript online submissions for Array Nesting.
// var arrayNesting = function (nums) {
//   let db = {},
//     n = nums.length,
//     dp = Array(n).fill(true),
//     ans = 0;
//   for (let i = 0; i < n; i++) {
//     db[i] = nums[i];
//   }
//   for (let i = 0; i < n; i++) {
//     if (dp[i]) {
//       let c = i,
//         k = 0;
//       while (dp[c]) {
//         dp[c] = false;
//         c = db[c];
//         k++;
//       }
//       ans = ans < k ? k : ans;
//     }
//   }
//   return ans;
// };
// Runtime: 139 ms, faster than 90.48% of JavaScript online submissions for Array Nesting.
// Memory Usage: 59.8 MB, less than 82.54% of JavaScript online submissions for Array Nesting.
