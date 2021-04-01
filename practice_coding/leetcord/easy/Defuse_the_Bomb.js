/*
 *
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
var decrypt = function (code, k) {
    let ans = [],
        l = code.length;
    if (k === 0) {
        ans = Array(l).fill(0);
    } else if (k > 0) {
        p = code.slice(1, k + 1).reduce((x, y) => x + y, 0);
        ans.push(p);
        for (let i = 1; i < l; i++) {
            p = p + code[(i + k) % l] - code[i % l];
            ans.push(p);
        }
    } else {
        p = code.slice(k).reduce((x, y) => x + y, 0);
        ans.push(p);
        for (let i = 0; i < l - 1; i++) {
            p = p + code[i] - code[(l + i + k) % l];
            ans.push(p);
        }
    }
    return ans;
};
//Runtime: 84 ms, faster than 57.23% of JavaScript online submissions for Defuse the Bomb.
//Memory Usage: 39.1 MB, less than 38.55% of JavaScript online submissions for Defuse the Bomb.
