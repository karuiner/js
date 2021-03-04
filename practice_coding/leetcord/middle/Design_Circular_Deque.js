/*
 *
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function (k) {
    this.storage = Array(k).fill(-1);
    this.k = k;
    this.end = 0;
};

/*
 *
 * Adds an item at the front of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function (value) {
    if (this.end < this.k) {
        this.storage = [value, ...this.storage.slice(0, this.k - 1)];
        this.end++;
        return true;
    }
    return false;
};

/*
 *
 * Adds an item at the rear of Deque. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function (value) {
    if (this.end < this.k) {
        this.storage[this.end] = value;
        this.end++;
        return true;
    }

    return false;
};

/*
 *
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function () {
    if (this.storage[0] !== -1) {
        this.storage.shift();
        this.storage.push(-1);
        this.end--;
        return true;
    }
    return false;
};

/*
 *
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function () {
    if (this.end > 0) {
        this.storage[this.end - 1] = -1;
        this.end--;

        return true;
    }
    return false;
};

/*
 *
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function () {
    return this.storage[0];
};

/*
 *
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function () {
    return this.storage[this.end - 1 < 0 ? 0 : this.end];
};

/*
 *
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function () {
    if (this.end === 0) {
        return true;
    }
    return false;
};

/*
 *
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function () {
    if (this.end === this.k) {
        return true;
    }
    return false;
};

/*
 *
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */

//Runtime: 132 ms, faster than 48.44% of JavaScript online submissions for Design Circular Deque.
//Memory Usage: 48.3 MB, less than 7.81% of JavaScript online submissions for Design Circular Deque.
