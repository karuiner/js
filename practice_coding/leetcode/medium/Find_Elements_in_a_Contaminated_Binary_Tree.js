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
var FindElements = function (root) {
  let db = {};

  function f(root, x, db) {
    root.val = x;
    if (db[x] === undefined) {
      db[x] = true;
    }
    if (root.left !== null) {
      let left = f(root.left, 2 * x + 1, db);
      root.left = left;
    }
    if (root.right !== null) {
      let right = f(root.right, 2 * x + 2, db);
      root.right = right;
    }
    return root;
  }

  let ans = f(root, 0, db);
  this.db = { ...db };
};

/*
 *
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function (target) {
  return this.db[target] === true;
};

/*
 *
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */

// Runtime: 136 ms, faster than 59.49% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.
// Memory Usage: 57.2 MB, less than 5.06% of JavaScript online submissions for Find Elements in a Contaminated Binary Tree.
