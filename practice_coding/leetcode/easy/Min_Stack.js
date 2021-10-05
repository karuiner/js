/*
 *
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
};

/*
 *
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack = this.stack.concat(val);
};

/*
 *
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length > 0) {
    this.stack = this.stack.slice(0, -1);
  }
};

/*
 *
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack.slice(-1);
  }
};

/*
 *
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.stack.length > 0) {
    return Math.min(...this.stack);
  }
};

/*
 *
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// Runtime: 512 ms, faster than 7.37% of JavaScript online submissions for Min Stack.
// Memory Usage: 48.6 MB, less than 5.33% of JavaScript online submissions for Min Stack.
