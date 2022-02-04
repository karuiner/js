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
var sumNumbers = function (root) {
  function f(root, s) {
    let ans = 0;
    if (root.left !== null) {
      ans += Number(f(root.left, `${s}${root.val}`));
    }
    if (root.right !== null) {
      ans += Number(f(root.right, `${s}${root.val}`));
    }
    if (root.left === null && root.right === null) {
      ans += Number(`${s}${root.val}`);
    }

    return ans;
  }

  return f(root, "");
};

// Runtime: 102 ms, faster than 40.22% of JavaScript online submissions for Sum Root to Leaf Numbers.
// Memory Usage: 42.3 MB, less than 8.27% of JavaScript online submissions for Sum Root to Leaf Numbers.
