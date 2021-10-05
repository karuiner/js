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
var findTilt = function (root, db = [], isorigin = true) {
  if (root === null) return 0;
  let l = 0,
    r = 0,
    ans = 0;
  if (root.left !== null) {
    l = findTilt(root.left, db, false);
  }

  if (root.right !== null) {
    r = findTilt(root.right, db, false);
  }
  db.push(Math.abs(l - r));
  ans = l + r + root.val;
  if (isorigin) {
    return db.reduce((x, y) => x + y, 0);
  } else {
    return ans;
  }
};

//Runtime: 88 ms, faster than 85.36% of JavaScript online submissions for Binary Tree Tilt.
//Memory Usage: 43.7 MB, less than 21.76% of JavaScript online submissions for Binary Tree Tilt.
