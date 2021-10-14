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
 * @return {number[]}
 */
var largestValues = function (root) {
  let ans = [];
  function f(root, ans, l) {
    if (root !== null) {
      if (ans[l] !== undefined) {
        ans[l] = ans[l] < root.val ? root.val : ans[l];
      } else {
        ans[l] = root.val;
      }
      if (root.left !== null) {
        ans = f(root.left, ans, l + 1);
      }
      if (root.right !== null) {
        ans = f(root.right, ans, l + 1);
      }
    }
    return ans;
  }
  return f(root, ans, 0);
};

// Runtime: 97 ms, faster than 37.46% of JavaScript online submissions for Find Largest Value in Each Tree Row.
// Memory Usage: 43.3 MB, less than 91.43% of JavaScript online submissions for Find Largest Value in Each Tree Row.
