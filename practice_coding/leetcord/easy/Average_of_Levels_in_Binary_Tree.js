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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
  let db = {},
    ans = [];
  function f(root, level, db) {
    if (root !== null) {
      db[level] =
        db[level] !== undefined ? [...db[level], root.val] : [root.val];
      if (root.left !== null) {
        f(root.left, level + 1, db);
      }
      if (root.right !== null) {
        f(root.right, level + 1, db);
      }
    }
  }
  f(root, 0, db);
  for (let i in db) {
    ans[Number(i)] = db[i].reduce((x, y) => x + y, 0) / db[i].length;
  }
  return ans;
};

// Runtime: 80 ms, faster than 97.14% of JavaScript online submissions for Average of Levels in Binary Tree.
// Memory Usage: 47 MB, less than 8.07% of JavaScript online submissions for Average of Levels in Binary Tree.
