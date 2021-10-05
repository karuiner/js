/*
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
  return s.split(" ").slice(0, k).join(" ");
};
// Runtime: 68 ms, faster than 98.05% of JavaScript online submissions for Truncate Sentence.
// Memory Usage: 39.5 MB, less than 5.55% of JavaScript online submissions for Truncate Sentence.
