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
 * @return {TreeNode}
 */
var pruneTree = function (root) {
  if (root === null) return root;
  if (root.left !== null) {
    let left = pruneTree(root.left);
    if (left === null) root.left = null;
  }

  if (root.right !== null) {
    let right = pruneTree(root.right);
    if (right === null) root.right = null;
  }

  if (root.left === null && root.right === null && root.val === 0) {
    return null;
  } else {
    return root;
  }
};
