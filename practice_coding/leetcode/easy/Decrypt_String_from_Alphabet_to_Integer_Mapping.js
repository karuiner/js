/*
 *
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function (s) {
    let db = {},
        ans = "";
    for (let i = 1; i < 27; i++) {
        db[i] = String.fromCharCode(96 + i);
    }
    while (s.length > 0) {
        if (s[2] === "#") {
            ans += db[s.substring(0, 2)];
            s = s.substring(3);
        } else {
            ans += db[s[0]];
            s = s.substring(1);
        }
    }
    return ans;
};
//Runtime: 76 ms, faster than 85.02% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
//Memory Usage: 38.6 MB, less than 72.96% of JavaScript online submissions for Decrypt String from Alphabet to Integer Mapping.
