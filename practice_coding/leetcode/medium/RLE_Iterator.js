/*
 *
 * @param {number[]} encoding
 */
var RLEIterator = function (encoding) {
  this.data = [];
  let c = 0;
  this.c = 0;

  for (let i = 0; i < encoding.length; i += 2) {
    let [a, b] = [encoding[i], encoding[i + 1]];
    if (a > 0) {
      this.data.push([c + a, b]);
      c += a;
    }
  }
  this.max = c;
};

/*
 *
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  let ans = -1;
  if (this.max >= n + this.c) {
    for (let [ic, ix] of this.data) {
      if (n + this.c <= ic) {
        ans = ix;
        break;
      }
    }
  }
  this.c += n;
  return ans;
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(encoding)
 * var param_1 = obj.next(n)
 */

// Runtime: 96 ms, faster than 35.64% of JavaScript online submissions for RLE Iterator.
// Memory Usage: 45 MB, less than 5.94% of JavaScript online submissions for RLE Iterator.
