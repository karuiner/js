/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let a = 0,
    b = nums.length - 1;
  if (nums[a] === target) return a;
  if (nums[b] === target) return b;
  while (b - a > 1) {
    let m = parseInt((a + b) * 0.5);
    if (nums[m] === target) {
      return m;
    } else if (nums[m] > target) {
      b = m;
    } else {
      a = m;
    }
  }

  return -1;
};

//Runtime: 84 ms, faster than 56.73% of JavaScript online submissions for Binary Search.
//Memory Usage: 42.6 MB, less than 31.66% of JavaScript online submissions for Binary Search.
