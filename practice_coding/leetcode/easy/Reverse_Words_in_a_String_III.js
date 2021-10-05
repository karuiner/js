/*
 *
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = "";
  for (let i of s.split(" ")) {
    let sub = "";
    for (let j of i) {
      sub = j + sub;
    }
    ans += sub + " ";
  }
  return ans.slice(0, -1);
};

// Runtime: 96 ms, faster than 23.29% of JavaScript online submissions for Reverse Words in a String III.
// Memory Usage: 45.1 MB, less than 69.13% of JavaScript online submissions for Reverse Words in a String III.
