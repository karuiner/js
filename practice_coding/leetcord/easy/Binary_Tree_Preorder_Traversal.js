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
var preorderTraversal = function (root) {
  let ans = [];
  if (root === null) return ans;
  ans.push(root.val);
  if (root.left !== null) {
    let left = preorderTraversal(root.left);
    ans = [...ans, ...left];
  }
  if (root.right !== null) {
    let right = preorderTraversal(root.right);
    ans = [...ans, ...right];
  }
  return ans;
};
// Runtime: 80 ms, faster than 42.44% of JavaScript online submissions for Binary Tree Preorder Traversal.
// Memory Usage: 40 MB, less than 5.30% of JavaScript online submissions for Binary Tree Preorder Traversal.
