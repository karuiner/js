/*
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function (nums1, nums2) {
  let db = {};

  for (let i of nums2) {
    if (db[i] === undefined) {
      db[i] = 1;
    } else {
      db[i]++;
    }
  }
  this.db = db;
  this.num1 = [...nums1];
  this.num2 = [...nums2];
};

/*
 *
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
  let x = this.num2[index];
  if (this.db === 1) {
    delete this.db[x];
  } else {
    this.db[x]--;
  }
  if (this.db[x + val] === undefined) {
    this.db[x + val] = 1;
  } else {
    this.db[x + val]++;
  }
  this.num2[index] += val;
};

/*
 *
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
  let ans = 0;
  for (let i of this.num1) {
    let c = this.db[tot - i] || 0;
    ans += c;
  }
  return ans;
};

/*
 *
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */

// Runtime: 957 ms, faster than 20.51% of JavaScript online submissions for Finding Pairs With a Certain Sum.
// Memory Usage: 98.3 MB, less than 10.26% of JavaScript online submissions for Finding Pairs With a Certain Sum.
