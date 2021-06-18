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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  let ans = root;

  if (root === null) return ans;

  if (root.val < val) {
    ans = searchBST(root.right, val);
  } else if (root.val > val) {
    ans = searchBST(root.left, val);
  }
  return ans;
};

// Runtime: 100 ms, faster than 57.88% of JavaScript online submissions for Search in a Binary Search Tree.
// Memory Usage: 45.3 MB, less than 11.88% of JavaScript online submissions for Search in a Binary Search Tree.
