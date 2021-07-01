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
var postorderTraversal = function (root) {
  let ans = [];
  if (root === null) return ans;
  if (root.left !== null) {
    let rst = postorderTraversal(root.left);
    ans = [...ans, ...rst];
  }
  if (root.right !== null) {
    let rst = postorderTraversal(root.right);
    ans = [...ans, ...rst];
  }
  ans = [...ans, root.val];

  return ans;
};
// Runtime: 64 ms, faster than 99.05% of JavaScript online submissions for Binary Tree Postorder Traversal.
// Memory Usage: 40.5 MB, less than 7.76% of JavaScript online submissions for Binary Tree Postorder Traversal.
