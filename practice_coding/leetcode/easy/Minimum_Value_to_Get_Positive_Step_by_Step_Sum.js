/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let s = 0,
    min = 10000;
  for (let i of nums) {
    s += i;
    if (s < min) {
      min = s;
    }
  }

  return min < 1 ? 1 - min : 1;
};

// Runtime: 73 ms, faster than 73.81% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
// Memory Usage: 42 MB, less than 19.64% of JavaScript online submissions for Minimum Value to Get Positive Step by Step Sum.
