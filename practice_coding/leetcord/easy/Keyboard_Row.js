/*
 *
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    let db = {},
        keys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    keys.forEach((x, i) => {
        for (let j of x) {
            db[j] = i;
        }
    });
    return words.filter((x) => {
        let k = null;
        for (let i of x.toLowerCase()) {
            if (k === null) {
                k = db[i];
            } else if (db[i] !== k) {
                return false;
            }
        }
        return true;
    });
};

//Runtime: 76 ms, faster than 73.62% of JavaScript online submissions for Keyboard Row.
//Memory Usage: 38.5 MB, less than 51.49% of JavaScript online submissions for Keyboard Row.
