/*
 *
 * @param {number[]} nums
 * @return {number}
 */
// 시도 1
var maximumUniqueSubarray = function (nums) {
  let ans = 0,
    n = nums.length,
    db = {},
    max = 0;
  for (let i = 0; i < n; i++) {
    let k = nums[i];
    if (db[k] === undefined) {
      ans += k;
      db[k] = ans;
      if (ans > max) {
        max = ans;
      }
    } else {
      ans -= db[k];
      ans += k;
      db[k] = ans;
    }
    console.log(ans, max, k, db[k]);
  }

  return max;
};
