/*
 *
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 *
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let ans = root.val !== null ? 1 : 0;
  if (root.children.length > 0) {
    for (let i of root.children) {
      let b = maxDepth(i);
      ans = 1 + b > ans ? 1 + b : ans;
    }
  }
  return ans;
};
//Runtime: 80 ms, faster than 98.20% of JavaScript online submissions for Maximum Depth of N-ary Tree.
//Memory Usage: 41.4 MB, less than 83.11% of JavaScript online submissions for Maximum Depth of N-ary Tree.
