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
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  let list = [root],
    ans = [];
  while (list.length > 0) {
    let sub = [],
      subl = [];
    for (let i of list) {
      if (i !== null) {
        sub.push(i.val);
        subl = [...subl, ...i.children];
      }
    }
    ans.push(sub);
    list = subl.slice();
  }
  return ans;
};
// Runtime: 132 ms, faster than 17.60% of JavaScript online submissions for N-ary Tree Level Order Traversal.
// Memory Usage: 46.3 MB, less than 12.02% of JavaScript online submissions for N-ary Tree Level Order Traversal.
