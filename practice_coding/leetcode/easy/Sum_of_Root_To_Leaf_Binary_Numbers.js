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
var sumRootToLeaf = function (root, p = "") {
    let ans = 0;
    let c1 = root.left !== null,
        c2 = root.right !== null;
    p += `${root.val}`;
    if (c1) ans += sumRootToLeaf(root.left, p);
    if (c2) ans += sumRootToLeaf(root.right, p);
    if (!c1 && !c2) {
        ans += Number(`0b${p}`);
    }
    return ans;
};

//Runtime: 80 ms, faster than 95.98% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
//Memory Usage: 40.1 MB, less than 98.21% of JavaScript online submissions for Sum of Root To Leaf Binary Numbers.
