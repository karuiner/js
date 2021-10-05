/*
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let arr = [...nums.slice(0, i), ...nums.slice(i + 1)];
    let k = 0,
      check = true;
    for (let i of arr) {
      if (i > k) {
        k = i;
      } else {
        check = false;
        break;
      }
    }
    if (check) {
      return true;
    }
  }

  return false;
};

// Runtime: 132 ms, faster than 24.12% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
// Memory Usage: 44.9 MB, less than 7.06% of JavaScript online submissions for Remove One Element to Make the Array Strictly Increasing.
