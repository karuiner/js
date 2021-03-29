/*
 *
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.storage = [];
};

/*
 *
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.storage.push(x);
};

/*
 *
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
    if (this.storage.length > 0) {
        return this.storage.pop();
    }
};

/*
 *
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
    if (this.storage.length > 0) {
        return this.storage[this.storage.length - 1];
    }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.storage.length === 0;
};

/*
 *
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

//Runtime: 80 ms, faster than 44.03% of JavaScript online submissions for Implement Stack using Queues.
//Memory Usage: 38.4 MB, less than 44.34% of JavaScript online submissions for Implement Stack using Queues.
