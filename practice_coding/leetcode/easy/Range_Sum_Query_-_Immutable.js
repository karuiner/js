/*
 *
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.arr = [0];
  let s = 0;
  for (let i of nums) {
    s += i;
    this.arr.push(s);
  }
};

/*
 *
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.arr[right + 1] - this.arr[left];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// Runtime: 158 ms, faster than 72.02% of JavaScript online submissions for Range Sum Query - Immutable.
// Memory Usage: 49 MB, less than 54.05% of JavaScript online submissions for Range Sum Query - Immutable.
