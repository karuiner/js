/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let sum = 0,
    l = 0,
    ans = 0;
  for (let i of nums) {
    if (l >= i) {
      if (sum > ans) ans = sum;
      sum = i;
      l = i;
    } else {
      sum += i;
      l = i;
    }
  }
  if (sum > ans) ans = sum;

  return ans;
};

//Runtime: 80 ms, faster than 60.06% of JavaScript online submissions for Maximum Ascending Subarray Sum.
//Memory Usage: 38.6 MB, less than 41.95% of JavaScript online submissions for Maximum Ascending Subarray Sum.
