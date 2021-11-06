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
var convertBST = function (root) {
  function f(root, v) {
    if (root === null) return [root, 0];
    let k = v;
    if (root.right !== null) {
      let [rroot, ik] = f(root.right, k);
      root.right = rroot;
      k = ik;
    }

    k += root.val;

    root.val = k;
    if (root.left !== null) {
      let [lroot, ik] = f(root.left, k);
      root.left = lroot;
      k = ik;
    }
    return [root, k];
  }
  let [ans, k] = f(root, 0);
  return ans;
};

// Runtime: 108 ms, faster than 80.90% of JavaScript online submissions for Convert BST to Greater Tree.
// Memory Usage: 48.1 MB, less than 77.53% of JavaScript online submissions for Convert BST to Greater Tree.
