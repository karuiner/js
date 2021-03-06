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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let result = 0;
    if (root !== null) {
        if (root.val >= low && root.val <= high) {
            result += root.val;
        }
        if (root.left !== null) {
            result += rangeSumBST(root.left, low, high);
        }
        if (root.right !== null) {
            result += rangeSumBST(root.right, low, high);
        }
    }
    return result;
};

//Runtime: 232 ms, faster than 61.72% of JavaScript online submissions for Range Sum of BST.
//Memory Usage: 68.1 MB, less than 60.40% of JavaScript online submissions for Range Sum of BST.
