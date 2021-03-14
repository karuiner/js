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
var bstToGst = function (root, level = 0, ans = 0, copy = new TreeNode()) {
    if (root.right !== null) {
        copy.right = new TreeNode();
        ans = bstToGst(root.right, level + 1, ans, copy.right);
    }
    if (root.val !== null) {
        ans += root.val;
        copy.val = ans;
    }
    if (root.left !== null) {
        copy.left = new TreeNode();
        ans = bstToGst(root.left, level + 1, ans, copy.left);
    }

    if (level === 0) {
        return copy;
    } else {
        return ans;
    }
};

//Runtime: 80 ms, faster than 63.58% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
//Memory Usage: 39.2 MB, less than 18.87% of JavaScript online submissions for Binary Search Tree to Greater Sum Tree.
