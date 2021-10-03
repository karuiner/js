/*
 *
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.db = {};
  for (let i = 0; i < nums.length; i++) {
    if (this.db[nums[i]]) {
      this.db[nums[i]].push(i);
    } else {
      this.db[nums[i]] = [i];
    }
  }
};

/*
 *
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let n = this.db[target].length;
  let k = Math.random() * n;
  k = k === n ? n - 1 : Math.floor(k);
  return this.db[target][k];
};

/*
 *
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// Runtime: 196 ms, faster than 52.09% of JavaScript online submissions for Random Pick Index.
// Memory Usage: 63.8 MB, less than 53.99% of JavaScript online submissions for Random Pick Index.
