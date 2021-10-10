var MyHashMap = function () {
  this.db = {};
};

/*
 *
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.db[key] = value;
};

/*
 *
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (this.db[key] !== undefined) {
    return this.db[key];
  } else {
    return -1;
  }
};

/*
 *
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  if (this.db[key] !== undefined) {
    delete this.db[key];
  }
};

/*
 *
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// Runtime: 192 ms, faster than 88.01% of JavaScript online submissions for Design HashMap.
// Memory Usage: 48.1 MB, less than 75.36% of JavaScript online submissions for Design HashMap.
