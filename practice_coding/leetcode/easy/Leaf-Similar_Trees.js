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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let db = { arr: [], arr2: [], check: true };

    function get(root, db, key, key2) {
        if (db["check"] === false) return false;
        let c1 = root.left === null,
            c2 = root.right === null;
        if (c1 && c2) {
            db[key].push(root.val);
            if (db[key2].length >= db[key].length) {
                if (db[key][db[key].length - 1] !== db[key2][db[key].length - 1]) {
                    db["check"] = false;
                }
            }
        } else {
            if (!c1) {
                get(root.left, db, key, key2);
            }
            if (!c2) {
                get(root.right, db, key, key2);
            }
        }

        return db["check"];
    }
    get(root1, db, "arr", "arr2");
    get(root2, db, "arr2", "arr");

    return db["check"] ? db.arr.length === db.arr2.length : false;
};
//Runtime: 76 ms, faster than 94.81% of JavaScript online submissions for Leaf-Similar Trees.
//Memory Usage: 40.1 MB, less than 91.35% of JavaScript online submissions for Leaf-Similar Trees.
