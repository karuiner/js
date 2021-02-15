/*
 *
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    ans = [];
    for (let i = 0; i < numRows; i++) {
        let p = [];
        if (i === 0) {
            p = [1];
        } else if (i === 1) {
            p = [1, 1];
        } else {
            ans.slice(-1)[0].forEach(function (x, i, c) {
                p = i === 0 ? p.concat(1) : p.concat(c[i - 1] + c[i]);
            });
            p.push(1);
        }
        ans.push(p);
    }
    return ans;
};
