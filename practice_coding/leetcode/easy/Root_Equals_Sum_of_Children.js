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
 * @return {boolean}
 */
var checkTree = function (root) {
  let k = 0;
  if (root.left !== null) {
    k += root.left.val;
  }
  if (root.right !== null) {
    k += root.right.val;
  }
  return root.val === k;
};

// Runtime: 78 ms, faster than 44.47% of JavaScript online submissions for Root Equals Sum of Children.
// Memory Usage: 43.2 MB, less than 43.90% of JavaScript online submissions for Root Equals Sum of Children.
