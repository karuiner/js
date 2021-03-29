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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    let newtree = root;
    if (root !== null) {
        newtree = new TreeNode(root.val);
        if (root.left !== null) {
            newtree.right = invertTree(root.left);
        }
        if (root.right !== null) {
            newtree.left = invertTree(root.right);
        }
    }
    return newtree;
};
//Runtime: 80 ms, faster than 62.35% of JavaScript online submissions for Invert Binary Tree.
//Memory Usage: 39 MB, less than 42.80% of JavaScript online submissions for Invert Binary Tree.
