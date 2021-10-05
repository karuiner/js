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
var maxDepth = function (root) {
  if (root === null) return 0;
  let ans = 1;
  let a = maxDepth(root.left);
  let b = maxDepth(root.right);
  return a >= b ? ans + a : ans + b;
};
//Runtime: 84 ms, faster than 84.59% of JavaScript online submissions for Maximum Depth of Binary Tree.
//Memory Usage: 41.4 MB, less than 65.76% of JavaScript online submissions for Maximum Depth of Binary Tree.
