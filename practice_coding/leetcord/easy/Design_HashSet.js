/*
 *
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.db = {};
};

/*
 *
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  if (this.db[key] === undefined) this.db[key] = 1;
};

/*
 *
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  if (this.db[key] !== undefined) delete this.db[key];
};

/*
 *
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.db[key] === undefined ? false : true;
};

/*
 *
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */

//Runtime: 184 ms, faster than 65.93% of JavaScript online submissions for Design HashSet.
//Memory Usage: 49.3 MB, less than 32.22% of JavaScript online submissions for Design HashSet.
