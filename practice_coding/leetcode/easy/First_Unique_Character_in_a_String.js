/*
 *
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let db = {};
    for (let i = 0; i < s.length; i++) {
        db[s[i]] = db[s[i]] === undefined ? 1 : db[s[i]] + 1;
    }
    for (let i = 0; i < s.length; i++) {
        if (db[s[i]] === 1) return i;
    }
    return -1;
};
//Runtime: 128 ms, faster than 36.31% of JavaScript online submissions for First Unique Character in a String.
//Memory Usage: 41.4 MB, less than 98.58% of JavaScript online submissions for First Unique Character in a String.
