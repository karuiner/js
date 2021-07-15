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
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function (preorder) {
  let val = preorder[0],
    left = [],
    right = [];
  let ans = new TreeNode(val);
  preorder = preorder.slice(1);
  preorder.forEach((x) => {
    if (x < val) {
      left.push(x);
    } else {
      right.push(x);
    }
  });

  if (left.length > 0) {
    let lbst = bstFromPreorder(left);
    ans.left = lbst;
  }

  if (right.length > 0) {
    let rbst = bstFromPreorder(right);
    ans.right = rbst;
  }

  return ans;
};

// Runtime: 76 ms, faster than 85.57% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
// Memory Usage: 40.5 MB, less than 9.28% of JavaScript online submissions for Construct Binary Search Tree from Preorder Traversal.
