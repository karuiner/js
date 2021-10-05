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
var isUnivalTree = function (root) {
  let n = root.val;
  function find(x, n) {
    if (x.val !== n) return false;
    if (x.left !== null) {
      let y = find(x.left, n);
      if (!y) return false;
    }
    if (x.right !== null) {
      let y = find(x.right, n);
      if (!y) return false;
    }
    return true;
  }
  return find(root, n);
};
//Runtime: 80 ms, faster than 63.55% of JavaScript online submissions for Univalued Binary Tree.
//Memory Usage: 39.2 MB, less than 22.07% of JavaScript online submissions for Univalued Binary Tree.
