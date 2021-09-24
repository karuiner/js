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
var findSecondMinimumValue = function (root) {
  let db = {};
  function get(root, db) {
    if (root !== null) {
      if (db[root.val] === undefined) {
        db[root.val] = 1;
      }
      get(root.left, db);
      get(root.right, db);
    }
  }
  get(root, db);
  let arr = Object.keys(db).map((x) => Number(x));
  if (arr.length > 1) {
    arr.sort((a, b) => a - b);
    return arr[1];
  } else {
    return -1;
  }
};

// Runtime: 72 ms, faster than 70.78% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
// Memory Usage: 38.4 MB, less than 84.93% of JavaScript online submissions for Second Minimum Node In a Binary Tree.
