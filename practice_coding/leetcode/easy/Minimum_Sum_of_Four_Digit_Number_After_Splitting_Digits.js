/*
 *
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
  let arr = `${num}`.split("");
  arr.sort((a, b) => Number(a) - Number(b));
  let a = Number(arr[0] + arr[2]),
    b = Number(arr[1] + arr[3]);
  return a + b;
};

// Runtime: 60 ms, faster than 94.88% of JavaScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
// Memory Usage: 42.5 MB, less than 40.00% of JavaScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
