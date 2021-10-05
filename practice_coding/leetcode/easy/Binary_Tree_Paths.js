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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root === null) return [];

  return getpath(root, "");
};

function getpath(root, path) {
  let ans = [];

  path += path.length === 0 ? `${root.val}` : `->${root.val}`;

  if (root.left !== null) {
    let left = getpath(root.left, path);
    ans = ans.concat(left);
  }

  if (root.right !== null) {
    let right = getpath(root.right, path);
    ans = ans.concat(right);
  }
  if (ans.length === 0) {
    ans = ans.concat(path);
  }

  return ans;
}
// Runtime: 88 ms, faster than 47.88% of JavaScript online submissions for Binary Tree Paths.
// Memory Usage: 40.3 MB, less than 44.64% of JavaScript online submissions for Binary Tree Paths.
