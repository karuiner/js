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
var findBottomLeftValue = function (root) {
  let list = [],
    level = -1,
    db = {};
  if (root !== null) {
    list.push(root);
  }
  while (list.length > 0) {
    level++;
    let sub = [];
    for (let i of list) {
      if (db[level]) {
        db[level] = [...db[level], i.val];
      } else {
        db[level] = [i.val];
      }
      if (i.left !== null) {
        sub.push(i.left);
      }
      if (i.right !== null) {
        sub.push(i.right);
      }
    }
    list = [...sub];
  }

  return db[level][0];
};

// Runtime: 153 ms, faster than 5.91% of JavaScript online submissions for Find Bottom Left Tree Value.
// Memory Usage: 47.2 MB, less than 5.38% of JavaScript online submissions for Find Bottom Left Tree Value.
