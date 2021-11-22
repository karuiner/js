/*
 *
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let ans = "",
    c = 0;
  let n = num1.length > num2.length ? num1.length : num2.length;
  num1 = num1.padStart(n, "0");
  num2 = num2.padStart(n, "0");
  for (let i = n - 1; i >= 0; i--) {
    let k = Number(num1[i]) + Number(num2[i]) + c;
    c = Math.floor(k / 10);
    k = k % 10;
    ans = `${k}` + ans;
  }
  if (c > 0) {
    ans = `${c}` + ans;
  }
  return ans;
};

// Runtime: 64 ms, faster than 99.76% of JavaScript online submissions for Add Strings.
// Memory Usage: 41.2 MB, less than 41.98% of JavaScript online submissions for Add Strings.
