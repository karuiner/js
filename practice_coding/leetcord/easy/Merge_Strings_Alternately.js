/*
 *
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let l = word1.length > word2.length ? word1.length : word2.length,
        ans = "";
    for (let i = 0; i < l; i++) {
        ans += word1[i] !== undefined ? word1[i] : "";
        ans += word2[i] !== undefined ? word2[i] : "";
    }
    return ans;
};

//Runtime: 76 ms, faster than 100.00% of JavaScript online submissions for Merge Strings Alternately.
//Memory Usage: 39 MB, less than 100.00% of JavaScript online submissions for Merge Strings Alternately.
