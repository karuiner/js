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
var rightSideView = function (root) {
  let ans = [];
  function f(root, l) {
    if (root !== null) {
      if (ans[l] === undefined) {
        ans[l] = root.val;
      }
      if (root.right !== null) {
        f(root.right, l + 1);
      }
      if (root.left !== null) {
        f(root.left, l + 1);
      }
    }
  }
  f(root, 0);
  return ans;
};

// Runtime: 94 ms, faster than 47.25% of JavaScript online submissions for Binary Tree Right Side View.
// Memory Usage: 43.7 MB, less than 73.14% of JavaScript online submissions for Binary Tree Right Side View.
