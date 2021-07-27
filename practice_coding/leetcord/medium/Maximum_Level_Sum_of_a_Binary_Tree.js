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
 * @return {number}
 */
var maxLevelSum = function (root) {
  function sum(root, level, db) {
    if (root !== null) {
      db[level] = db[level] ? db[level] + root.val : root.val;
      if (root.left !== null) {
        sum(root.left, level + 1, db);
      }
      if (root.right !== null) {
        sum(root.right, level + 1, db);
      }
    }
  }
  let db = {},
    ans = 0,
    s = -100000;
  sum(root, 1, db);
  for (let i in db) {
    if (db[i] > s) {
      s = db[i];
      ans = Number(i);
    }
  }
  return ans;
};

// Runtime: 180 ms, faster than 87.23% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
// Memory Usage: 57.2 MB, less than 52.13% of JavaScript online submissions for Maximum Level Sum of a Binary Tree.
