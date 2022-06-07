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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  let ans = 0,
    arr = [];

  function find(root, idx) {
    if (root !== null) {
      arr[idx] = root.val;
      if (root.left !== null) {
        find(root.left, 2 * idx + 1);
      }
      if (root.right !== null) {
        find(root.right, 2 * idx + 2);
      }
    }
  }

  find(root, 0);
  for (let i = 0; i < arr.length; i++) {
    if (i !== undefined) {
      let k = i,
        s = 0;
      while (true) {
        s += arr[k];
        if (s === targetSum) {
          ans++;
        }
        if (k === 0) {
          break;
        }
        k = Math.floor((k - 1) / 2);
      }
    }
  }

  return ans;
};
