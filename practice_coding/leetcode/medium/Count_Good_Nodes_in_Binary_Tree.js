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
var goodNodes = function (root, k = -10000) {
  if (root === null) return 0;
  let ans = 0;
  if (root.val >= k) ans++;
  if (root.val >= k) k = root.val;
  if (root.left !== null) {
    ans += goodNodes(root.left, k);
  }
  if (root.right !== null) {
    ans += goodNodes(root.right, k);
  }

  return ans;
};
