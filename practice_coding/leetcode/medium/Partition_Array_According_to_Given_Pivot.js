/*
 *
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let a = [],
    b = [],
    c = [];
  for (let i of nums) {
    if (i < pivot) {
      a.push(i);
    } else if (i > pivot) {
      c.push(i);
    } else {
      b.push(i);
    }
  }
  return [...a, ...b, ...c];
};

// Runtime: 435 ms, faster than 100.00% of JavaScript online submissions for Partition Array According to Given Pivot.
// Memory Usage: 94.9 MB, less than 100.00% of JavaScript online submissions for Partition Array According to Given Pivot.
