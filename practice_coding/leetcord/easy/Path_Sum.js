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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false;
  return check(root, targetSum, 0);
};

function check(root, sum, v) {
  if (root === null) return sum === v;
  v += root.val;
  let ans = sum === v;
  if (root.left) {
    let k = check(root.left, sum, v);
    ans = k;
    if (k) return k;
  }

  if (root.right) {
    let k = check(root.right, sum, v);
    ans = k;
    if (k) return k;
  }
  return ans;
}
// Runtime: 72 ms, faster than 99.29% of JavaScript online submissions for Path Sum.
// Memory Usage: 42.9 MB, less than 15.54% of JavaScript online submissions for Path Sum.
