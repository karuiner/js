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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
  function get(root) {
    let ans = [];
    if (root === null) return ans;
    ans.push(root.val);
    if (root.left !== null) {
      ans = ans.concat(get(root.left));
    }
    if (root.right !== null) {
      ans = ans.concat(get(root.right));
    }
    return ans;
  }
  let ans = [];
  ans = ans.concat(get(root1));
  ans = ans.concat(get(root2));
  ans.sort((x, y) => x - y);
  return ans;
};

//Runtime: 300 ms, faster than 11.11% of JavaScript online submissions for All Elements in Two Binary Search Trees.
//Memory Usage: 56.7 MB, less than 6.48% of JavaScript online submissions for All Elements in Two Binary Search Trees.
