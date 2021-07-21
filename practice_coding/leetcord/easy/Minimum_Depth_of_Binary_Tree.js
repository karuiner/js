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
var minDepth = function (root) {
  function roopf(root, depth) {
    let ans = depth,
      left,
      right;
    if (root === null) return depth - 1;
    if (root.left !== null) {
      left = roopf(root.left, depth + 1);
    }
    if (root.right !== null) {
      right = roopf(root.right, depth + 1);
    }
    if (left && right) {
      ans = left < right ? left : right;
    } else {
      ans = left ? left : ans;
      ans = right ? right : ans;
    }

    return ans;
  }
  return roopf(root, 1);
};
// Runtime: 244 ms, faster than 72.08% of JavaScript online submissions for Minimum Depth of Binary Tree.
// Memory Usage: 74.3 MB, less than 54.12% of JavaScript online submissions for Minimum Depth of Binary Tree.
