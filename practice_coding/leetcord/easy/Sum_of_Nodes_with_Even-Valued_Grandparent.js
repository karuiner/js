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
 * @return {number}
 */
var sumEvenGrandparent = function (root) {
    function sum_value(x) {
        let ans = 0;
        if (!(x.val % 2)) {
            if (x.left !== null) {
                if (x.left.left !== null) {
                    ans += x.left.left.val;
                }
                if (x.left.right !== null) {
                    ans += x.left.right.val;
                }
            }
            if (x.right !== null) {
                if (x.right.left !== null) {
                    ans += x.right.left.val;
                }
                if (x.right.right !== null) {
                    ans += x.right.right.val;
                }
            }
        }
        return ans;
    }
    let ans = 0;
    if (root !== null) {
        ans += sum_value(root);
        if (root.left !== null) {
            ans += sumEvenGrandparent(root.left);
        }
        if (root.right !== null) {
            ans += sumEvenGrandparent(root.right);
        }
    }

    return ans;
};

//Runtime: 108 ms, faster than 74.92% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
//Memory Usage: 48.8 MB, less than 68.02% of JavaScript online submissions for Sum of Nodes with Even-Valued Grandparent.
