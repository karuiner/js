/*
 *
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/*
 *
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    let ans = [];
    if (root !== null) {
        ans.push(root.val);
        for (let i of root.children) {
            let p = preorder(i);
            ans = ans.concat(p);
        }
    }
    return ans;
};
//Runtime: 92 ms, faster than 92.82% of JavaScript online submissions for N-ary Tree Preorder Traversal.
//Memory Usage: 45.7 MB, less than 11.03% of JavaScript online submissions for N-ary Tree Preorder Traversal.
