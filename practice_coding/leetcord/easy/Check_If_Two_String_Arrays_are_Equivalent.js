/*
 *
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") === word2.join("");
};

//Runtime: 68 ms, faster than 98.53% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
//Memory Usage: 38.6 MB, less than 79.64% of JavaScript online submissions for Check If Two String Arrays are Equivalent.
