/*
 *
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
  let ss = s.split(" ");
  let n = ss.length;
  let ans = Array(n).fill("");
  for (let i of ss) {
    ans[Number(i.slice(-1)) - 1] = i.slice(0, -1);
  }
  return ans.join(" ");
};
// Runtime: 80 ms, faster than 59.63% of JavaScript online submissions for Sorting the Sentence.
// Memory Usage: 38.2 MB, less than 75.51% of JavaScript online submissions for Sorting the Sentence.
