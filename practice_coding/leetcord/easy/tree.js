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
    if (p.val !== q.val) {
        return false;
    } else {
        if (p.left === null || q.left === null) {
            return false;
        } else if (p.left !== null && q.left !== null) {
            let check = isSameTree(p.left, q.left);
            if (!check) {
                return false;
            }
        } else {
            return true;
        }
        if (p.right === null || q.right === null) {
            return false;
        } else if (p.right !== null && q.right !== null) {
            let check = isSameTree(p.right, q.right);
            if (!check) {
                return false;
            }
        } else {
            return true;
        }
    }

    return true;
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

let p = new TreeNode(1, 2, 3);
let q = new TreeNode(1, 2, 3);
console.log(p.val);
//console.log(isSameTree(p, q));
