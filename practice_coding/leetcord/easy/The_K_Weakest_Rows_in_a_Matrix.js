/*
 *
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    let db = {};
    mat.forEach((x, i) => {
        let s = x.reduce((y, z) => y + z);
        db[s] = db[s] === undefined ? [i] : db[s].concat(i);
    });
    let ans = [];
    for (let i of Object.keys(db)) {
        ans = ans.concat(db[i]);
        if (ans.length >= k) {
            break;
        }
    }
    return ans.slice(0, k);
};

//Runtime: 80 ms, faster than 83.33% of JavaScript online submissions for The K Weakest Rows in a Matrix.
//Memory Usage: 40.1 MB, less than 77.78% of JavaScript online submissions for The K Weakest Rows in a Matrix.
