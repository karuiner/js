/*
 *
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let ans = [],
    n = temperatures.length;
  for (let i = 0; i < n; i++) {
    let c = 0;
    for (let j = i + 1; j < n; j++) {
      if (temperatures[j] > temperatures[i]) {
        c = j - i;
        break;
      }
    }
    ans.push(c);
  }
  return ans;
};

// Runtime: 1156 ms, faster than 29.17% of JavaScript online submissions for Daily Temperatures.
// Memory Usage: 60.9 MB, less than 36.18% of JavaScript online submissions for Daily Temperatures.
