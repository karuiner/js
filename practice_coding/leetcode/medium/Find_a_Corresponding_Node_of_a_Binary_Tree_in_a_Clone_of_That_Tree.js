/*
 *
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 *
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
  let ans = false;

  if (original.val !== target.val) {
    if (original.left !== null) {
      let sub = getTargetCopy(original.left, cloned.left, target);
      if (sub !== false) {
        ans = sub;
      }
    }
    if (original.right !== null) {
      let sub = getTargetCopy(original.right, cloned.right, target);
      if (sub !== false) {
        ans = sub;
      }
    }
  } else {
    ans = cloned;
  }
  return ans;
};

// Runtime: 308 ms, faster than 60.27% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
// Memory Usage: 61.7 MB, less than 39.27% of JavaScript online submissions for Find a Corresponding Node of a Binary Tree in a Clone of That Tree.
