/*
 *
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let ans = 0,
        db = { 10: 0, 5: 0, 2: 0 };
    for (let i = 1; i <= n; i++) {
        let pp = i;
        while (!(pp % 2) | !(pp % 10) | !(pp % 5)) {
            if (!(pp % 10)) {
                db[10] += 1;
                pp = pp / 10;
            } else if (!(pp % 5)) {
                db[5] += 1;
                pp = pp / 5;
            } else if (!(pp % 2)) {
                db[2] += 1;
                pp = pp / 2;
            }
        }
    }
    let k = Math.min(db[5], db[2]);
    return db[10] + k;
};
// Runtime: 112 ms, faster than 17.24% of JavaScript online submissions for Factorial Trailing Zeroes.
// Memory Usage: 39.5 MB, less than 47.13% of JavaScript online submissions for Factorial Trailing Zeroes.
