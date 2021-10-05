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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let s = [],
    ans = [];
  if (root !== null) {
    s.push(root);
  }
  while (s.length > 0) {
    let list = [],
      sub = [];
    for (let i of s) {
      sub.push(i.val);
      if (i.left !== null) {
        list.push(i.left);
      }
      if (i.right !== null) {
        list.push(i.right);
      }
    }
    s = [...list];
    ans.push(sub);
  }
  return ans;
};

// Runtime: 97 ms, faster than 21.03% of JavaScript online submissions for Binary Tree Level Order Traversal.
// Memory Usage: 40.5 MB, less than 81.05% of JavaScript online submissions for Binary Tree Level Order Traversal.
