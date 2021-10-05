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
var deepestLeavesSum = function (root, lvl = 0, db = { mxl: 0 }) {
    db["mxl"] = lvl > db["mxl"] ? lvl : db["mxl"];
    db[lvl] = db[lvl] === undefined ? root.val : db[lvl] + root.val;
    if (root.left !== null) {
        deepestLeavesSum(root.left, lvl + 1, db);
    }
    if (root.right !== null) {
        deepestLeavesSum(root.right, lvl + 1, db);
    }

    if (lvl === 0) {
        return db[db["mxl"]];
    }
};
//Runtime: 112 ms, faster than 65.80% of JavaScript online submissions for Deepest Leaves Sum.
//Memory Usage: 48.9 MB, less than 56.21% of JavaScript online submissions for Deepest Leaves Sum.
