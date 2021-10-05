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
var increasingBST = function (root) {
  let left,
    right,
    val = null;
  let ans = new TreeNode();

  if (root !== null) {
    ans.val = root.val;

    if (root.left !== null) {
      left = increasingBST(root.left);
      let k = left;
      while (k.right !== null) {
        k = k.right;
      }

      k.right = ans;
      ans = left;
    }

    if (root.right !== null) {
      right = increasingBST(root.right);
      let k = ans;
      while (k.right !== null) {
        k = k.right;
      }

      k.right = right;
    }
  }

  return ans;
};

// Runtime: 80 ms, faster than 66.91% of JavaScript online submissions for Increasing Order Search Tree.
// Memory Usage: 39.9 MB, less than 20.49% of JavaScript online submissions for Increasing Order Search Tree.
