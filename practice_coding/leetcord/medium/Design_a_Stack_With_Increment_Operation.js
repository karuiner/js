/*
 *
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
  this.len = maxSize;
  this.stack = [];
};

/*
 *
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
  if (this.stack.length < this.len) {
    this.stack = [...this.stack, x];
  }
};

/*
 *
 * @return {number}
 */
CustomStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    let a = this.stack.slice(-1);
    this.stack = this.stack.slice(0, -1);
    return a;
  } else {
    return -1;
  }
};

/*
 *
 * @param {number} k
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
  if (this.stack.length > 0) {
    let l = Math.min(this.stack.length, k, this.len);

    for (let i = 0; i < l; i++) {
      this.stack[i] += val;
    }
  }
};

/*
 *
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */

// Runtime: 112 ms, faster than 99.30% of JavaScript online submissions for Design a Stack With Increment Operation.
// Memory Usage: 47.6 MB, less than 9.09% of JavaScript online submissions for Design a Stack With Increment Operation.
