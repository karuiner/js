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
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  function f(root, target) {
    let ans = root,
      left = false,
      right = false;
    if (root.left !== null) {
      let sub = f(root.left, target);
      if (sub !== null) left = true;
      root.left = sub;
    }
    if (root.right !== null) {
      let sub = f(root.right, target);
      if (sub !== null) right = true;
      root.right = sub;
    }
    if (!left && !right && root.val === target) {
      ans = null;
    }
    return ans;
  }
  root = f(root, target);
  return root;
};

// Runtime: 84 ms, faster than 97.76% of JavaScript online submissions for Delete Leaves With a Given Value.
// Memory Usage: 44.4 MB, less than 9.70% of JavaScript online submissions for Delete Leaves With a Given Value.
