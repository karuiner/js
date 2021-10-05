/*
 *
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.nums = [...nums];
  this.ori = [...nums];
};

/*
 *
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.nums = [...this.ori];
  return this.nums;
};

/*
 *
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  let card = [...this.nums],
    ncard = [],
    n = this.nums.length;
  while (card.length > 0) {
    let k = Math.floor(Math.random() * n);
    if (k === n) {
      k = n - 1;
    }
    ncard.push(card[k]);
    n -= 1;
    card = [...card.slice(0, k), ...card.slice(k + 1)];
  }
  this.nums = [...ncard];
  return ncard;
};

/*
 *
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

// Runtime: 256 ms, faster than 23.06% of JavaScript online submissions for Shuffle an Array.
// Memory Usage: 56.5 MB, less than 15.60% of JavaScript online submissions for Shuffle an Array.
