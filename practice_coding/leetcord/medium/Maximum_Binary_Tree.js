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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
  let [i, v] = nums.reduce((acc, x, i) => {
    if (acc.length === 0) {
      acc = [i, x];
    } else {
      if (x > acc[1]) {
        acc = [i, x];
      }
    }
    return acc;
  }, []);
  let a = nums.slice(0, i),
    b = nums.slice(i + 1),
    l,
    r;
  if (a.length > 0) l = constructMaximumBinaryTree(a);
  if (b.length > 0) r = constructMaximumBinaryTree(b);

  return new TreeNode(v, l, r);
};
//Runtime: 124 ms, faster than 41.02% of JavaScript online submissions for Maximum Binary Tree.
//Memory Usage: 45.4 MB, less than 53.90% of JavaScript online submissions for Maximum Binary Tree.
