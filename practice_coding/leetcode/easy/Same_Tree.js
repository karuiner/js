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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    if (p === null && q === null) {
        return true;
    } else if (p === null || q === null) {
        return false;
    }
    let it_val = p.val === q.val;
    if (it_val) {
        if (!isSameTree(p.left, q.left)) {
            return false;
        }
        if (!isSameTree(p.right, q.right)) {
            return false;
        }
    } else {
        return false;
    }

    return true;
};

//Runtime: 64 ms, faster than 99.77% of JavaScript online submissions for Same Tree.
//Memory Usage: 39 MB, less than 27.18% of JavaScript online submissions for Same Tree.
