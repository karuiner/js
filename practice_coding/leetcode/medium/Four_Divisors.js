/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var sumFourDivisors = function (nums) {
  let ans = 0;
  for (let i of nums) {
    let d = 0,
      s = 0;
    for (let j = 1; j <= Math.floor(Math.sqrt(i)); j++) {
      if (i % j === 0) {
        if (j === i / j) {
          d++;
          s += j;
          // break // 제곱근의 경우 약수가 홀수가 되므로 해당 수에 대한 계산을 넘겨도 되므로
        } else {
          d += 2;
          s += j + i / j;
        }
      }
    }
    if (d === 4) {
      ans += s;
    }
  }
  return ans;
};
// Runtime: 124 ms, faster than 77.42% of JavaScript online submissions for Four Divisors.
// Memory Usage: 41.4 MB, less than 45.16% of JavaScript online submissions for Four Divisors.
