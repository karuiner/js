/*
 *
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  let a = "",
    b = "",
    c = "",
    vb = "a".charCodeAt(0);
  let l = Math.max(firstWord.length, secondWord.length, targetWord.length);
  for (let i = 0; i < l; i++) {
    a += firstWord[i] ? firstWord.charCodeAt(i) - vb : "";
    b += secondWord[i] ? secondWord.charCodeAt(i) - vb : "";
    c += targetWord[i] ? targetWord.charCodeAt(i) - vb : "";
  }
  return Number(a) + Number(b) === Number(c);
};
// Runtime: 72 ms, faster than 68.13% of JavaScript online submissions for Check if Word Equals Summation of Two Words.
// Memory Usage: 38.6 MB, less than 77.50% of JavaScript online submissions for Check if Word Equals Summation of Two Words.
