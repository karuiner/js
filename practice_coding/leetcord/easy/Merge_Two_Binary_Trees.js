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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  let val, left, right;
  if (root1 !== null && root2 !== null) {
    val = root1.val + root2.val;
    if (root1.left || root2.left) {
      left = mergeTrees(root1.left, root2.left);
    }
    if (root1.right || root2.right) {
      right = mergeTrees(root1.right, root2.right);
    }
  } else if (root1 !== null) {
    val = root1.val;
    if (root1.left) {
      left = mergeTrees(root1.left, null);
    }
    if (root1.right) {
      right = mergeTrees(root1.right, null);
    }
  } else if (root2 !== null) {
    val = root2.val;
    if (root2.left) {
      left = mergeTrees(root2.left, null);
    }
    if (root2.right) {
      right = mergeTrees(root2.right, null);
    }
  }
  return root1 !== null || root2 !== null
    ? new TreeNode(val, left, right)
    : null;
};

// Runtime: 108 ms, faster than 87.70% of JavaScript online submissions for Merge Two Binary Trees.
// Memory Usage: 47.2 MB, less than 5.04% of JavaScript online submissions for Merge Two Binary Trees.
