/*
 *
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function (startValue, target) {
  let ans = 0;

  if (startValue < target) {
    let p = target,
      c = 0;
    while (startValue !== p) {
      c++;
      if (p % 2 === 0 && p > startValue) {
        p /= 2;
      } else {
        p++;
      }
    }
    ans = c;
  } else {
    ans = startValue - target;
  }

  return ans;
};

// Runtime: 100 ms, faster than 41.67% of JavaScript online submissions for Broken Calculator.
// Memory Usage: 38.8 MB, less than 41.67% of JavaScript online submissions for Broken Calculator.
