/*
 *
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function (num) {
  let ans = [1, num + 1];
  for (let i = 1; i < 3; i++) {
    let k = Math.floor(Math.sqrt(num + i));
    if ((num + i) / k === k) {
      ans = [k, k];
      break;
    }
    for (let j = k; j > 0; j--) {
      if (
        (num + i) % j === 0 &&
        ans[1] - ans[0] > Math.abs((num + i) / j - j)
      ) {
        ans = [j, (num + i) / j];
        break;
      }
    }
  }
  return ans;
};

// Runtime: 96 ms, faster than 30.77% of JavaScript online submissions for Closest Divisors.
// Memory Usage: 39.5 MB, less than 46.15% of JavaScript online submissions for Closest Divisors.
