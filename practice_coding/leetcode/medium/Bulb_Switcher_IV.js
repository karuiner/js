/*
 *
 * @param {string} target
 * @return {number}
 */
var minFlips = function (target) {
  let ans = 0,
    k = "0";
  for (let i of target) {
    if (i !== k) {
      k = i;
      ans++;
    }
  }
  return ans;
};

// Runtime: 76 ms, faster than 88.68% of JavaScript online submissions for Bulb Switcher IV.
// Memory Usage: 41.5 MB, less than 83.02% of JavaScript online submissions for Bulb Switcher IV.
