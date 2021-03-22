/*
 *
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    let ans = [];
    if (root !== null) {
        for (let i of root.children) {
            ans = ans.concat(postorder(i));
        }
        ans.push(root.val);
    }

    return ans;
};

//Runtime: 104 ms, faster than 40.72% of JavaScript online submissions for N-ary Tree Postorder Traversal.
//Memory Usage: 46.7 MB, less than 5.82% of JavaScript online submissions for N-ary Tree Postorder Traversal.
