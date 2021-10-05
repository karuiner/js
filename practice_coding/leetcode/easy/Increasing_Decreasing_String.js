/*
 *
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
    let db = {},
        l = s.length;
    for (let i of s) {
        db[i] = db[i] === undefined ? 1 : db[i] + 1;
    }
    let k = Object.keys(db);
    k.sort();
    let ans = "";
    while (l > 0) {
        for (let i of k) {
            if (db[i] > 0) {
                ans += i;
                db[i] -= 1;
                l -= 1;
            }
        }
        let ss = "";
        for (let i of k) {
            if (db[i] > 0) {
                ss = i + ss;
                db[i] -= 1;
                l -= 1;
            }
        }
        ans += ss;
    }
    return ans;
};

//Runtime: 100 ms, faster than 74.00% of JavaScript online submissions for Increasing Decreasing String.
//Memory Usage: 43.5 MB, less than 55.33% of JavaScript online submissions for Increasing Decreasing String.
