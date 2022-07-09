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
var maxAncestorDiff = function (root) {
  let ans = 0;
  function f(root, mn, mx) {
    if (root !== null) {
      let x = root.val;
      if (mn === -1) {
        mn = x;
      }
      if (mx === -1) {
        mx = x;
      }

      ans = Math.max(ans, Math.abs(x - mn), Math.abs(x - mx));
      if (root.left !== null) {
        f(root.left, x < mn ? x : mn, x > mx ? x : mx);
      }
      if (root.right !== null) {
        f(root.right, x < mn ? x : mn, x > mx ? x : mx);
      }
    }
  }
  f(root, -1, -1);
  return ans;
};

// Runtime: 93 ms, faster than 68.07% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
// Memory Usage: 45.6 MB, less than 41.18% of JavaScript online submissions for Maximum Difference Between Node and Ancestor.
