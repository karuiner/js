/*
 *
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 *
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  function ex(x) {
    let ans = [];
    if (x !== null) {
      if (x.right !== null) {
        let right = ex(x.right);
        ans = [...ans, ...right];
      }
      ans = [...ans, x.val];
      if (x.left !== null) {
        let left = ex(x.left);
        ans = [...ans, ...left];
      }
    }
    return ans;
  }
  this.tree = ex(root);
};

/*
 *
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.tree.slice(-1)) {
    let ans = this.tree.slice(-1);
    this.tree = this.tree.slice(0, -1);
    return ans;
  }
};

/*
 *
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.tree.length !== 0;
};

/*
 *
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// Runtime: 176 ms, faster than 23.61% of JavaScript online submissions for Binary Search Tree Iterator.
// Memory Usage: 51.9 MB, less than 11.57% of JavaScript online submissions for Binary Search Tree Iterator.
