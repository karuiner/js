/*
 *
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    let pp = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
    let db = {},
        ans = {};
    pp.forEach((x, i) => {
        db[String.fromCharCode(97 + i)] = x;
    });
    for (let i of words) {
        let s = i.split("").reduce((acc, x) => acc + db[x], "");

        if (ans[s] === undefined) ans[s] = 1;
    }
    return Object.keys(ans).length;
};
//Runtime: 80 ms, faster than 82.39% of JavaScript online submissions for Unique Morse Code Words.
//Memory Usage: 40.5 MB, less than 28.17% of JavaScript online submissions for Unique Morse Code Words.
