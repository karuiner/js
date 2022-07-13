var SmallestInfiniteSet = function () {
  this.min = 1;
  this.out = {};
};

/*
 *
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
  let ans = this.min;
  this.out[this.min] = true;
  while (this.out[this.min] !== undefined) {
    this.min++;
  }
  return ans;
};

/*
 *
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
  if (this.out[num] !== undefined) {
    delete this.out[num];
    if (num < this.min) {
      this.min = num;
    }
  }
};

/*
 *
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// Runtime: 221 ms, faster than 74.24% of JavaScript online submissions for Smallest Number in Infinite Set.
// Memory Usage: 49.7 MB, less than 79.55% of JavaScript online submissions for Smallest Number in Infinite Set.
