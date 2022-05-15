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
var averageOfSubtree = function (root) {
  let ans = 0;
  function f(root) {
    let s = root.val,
      c = 1;
    if (root.left !== null) {
      let [a, b] = f(root.left);
      s += a;
      c += b;
    }
    if (root.right !== null) {
      let [a, b] = f(root.right);
      s += a;
      c += b;
    }
    if (root.val === Math.floor(s / c)) {
      ans++;
    }

    return [s, c];
  }
  f(root);
  return ans;
};

// Runtime: 96 ms, faster than 51.79% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
// Memory Usage: 46.5 MB, less than 86.15% of JavaScript online submissions for Count Nodes Equal to Average of Subtree.
