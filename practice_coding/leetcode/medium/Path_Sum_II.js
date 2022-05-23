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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let ans = [];

  function f(root, arr, k) {
    if (root !== null) {
      k = k + root.val;
      arr.push(root.val);

      if (root.left === null && root.right === null) {
        if (k === targetSum) {
          ans.push(arr);
        }
      } else {
        if (root.left !== null) {
          f(root.left, [...arr], k);
        }
        if (root.right !== null) {
          f(root.right, [...arr], k);
        }
      }
    }
  }
  f(root, [], 0);

  return ans;
};

// Runtime: 113 ms, faster than 39.30% of JavaScript online submissions for Path Sum II.
// Memory Usage: 52.7 MB, less than 28.65% of JavaScript online submissions for Path Sum II.
