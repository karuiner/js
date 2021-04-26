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
var inorderTraversal = function (root) {
  let ans = [];
  if (root === null) return ans;
  if (root.left !== null) {
    let k = inorderTraversal(root.left);
    ans = ans.concat(k);
  }
  ans = ans.concat(root.val);
  if (root.right !== null) {
    let k = inorderTraversal(root.right);
    ans = ans.concat(k);
  }
  return ans;
};
//Runtime: 72 ms, faster than 93.71% of JavaScript online submissions for Binary Tree Inorder Traversal.
//Memory Usage: 39 MB, less than 15.44% of JavaScript online submissions for Binary Tree Inorder Traversal.
