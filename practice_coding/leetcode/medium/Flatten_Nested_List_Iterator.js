/*
 *
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/*
 *
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {
  function flat(arr) {
    let ans = [];
    for (let i of arr) {
      if (i.isInteger()) {
        ans.push(i.getInteger());
      } else {
        let sub = flat(i.getList());
        ans = ans.concat(sub);
      }
    }
    return ans;
  }
  this.arr = flat(nestedList);
  this.n = 0;
};

/*
 *
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.arr[this.n] !== undefined;
};

/*
 *
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function () {
  let n = this.arr[this.n];
  this.n++;
  return n;
};

/*
 *
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

// Runtime: 92 ms, faster than 98.39% of JavaScript online submissions for Flatten Nested List Iterator.
// Memory Usage: 54.8 MB, less than 5.65% of JavaScript online submissions for Flatten Nested List Iterator.
