/*
 *
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/*
 *
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.iterator = [];
  this.f = iterator;
  while (iterator.hasNext()) {
    this.iterator.push(iterator.next());
  }
  this.pointer = 0;
};

/*
 *
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  return this.iterator[this.pointer];
};

/*
 *
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  let x = this.iterator[this.pointer];
  this.pointer++;
  return x;
};

/*
 *
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.iterator[this.pointer] !== undefined;
};

/*
 *
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

// Runtime: 69 ms, faster than 76.99% of JavaScript online submissions for Peeking Iterator.
// Memory Usage: 44 MB, less than 8.50% of JavaScript online submissions for Peeking Iterator.
