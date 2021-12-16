var MapSum = function () {
  this.db = {};
};

/*
 *
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
  this.db[key] = val;
};

/*
 *
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
  let l = prefix.length;
  return Object.keys(this.db).reduce((acc, x) => {
    let k = x.slice(0, l) === prefix ? this.db[x] : 0;
    return acc + k;
  }, 0);
};

/*
 *
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

// Runtime: 101 ms, faster than 18.06% of JavaScript online submissions for Map Sum Pairs.
// Memory Usage: 39.5 MB, less than 97.22% of JavaScript online submissions for Map Sum Pairs.
