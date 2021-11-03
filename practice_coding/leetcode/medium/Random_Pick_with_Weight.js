/*
 *
 * @param {number[]} w
 */
var Solution = function (w) {
  let k = 0;
  this.arr = w.map((x) => {
    k += x;
    return k;
  });
  this.sum = k;
};

/*
 *
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let ans = 0,
    p = Math.random();
  if (this.arr.length > 1) {
    for (let i = 0; i < this.arr.length; i++) {
      if (p <= this.arr[i] / this.sum) {
        ans = i;
        break;
      }
    }
  }
  return ans;
};

/*
 *
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

// Runtime: 284 ms, faster than 37.86% of JavaScript online submissions for Random Pick with Weight.
// Memory Usage: 48.4 MB, less than 21.81% of JavaScript online submissions for Random Pick with Weight.
