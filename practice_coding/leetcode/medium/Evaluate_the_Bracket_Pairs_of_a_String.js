/*
 *
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let db = {};
  for (let i of knowledge) {
    db[i[0]] = i[1];
  }
  let ans = "",
    w = "",
    ck = false;
  for (let i of s) {
    if (i === "(") {
      ck = true;
    } else if (i === ")") {
      if (db[w] === undefined) {
        ans += "?";
      } else {
        ans += db[w];
      }
      w = "";
      ck = false;
    } else if (ck) {
      w += i;
    } else {
      ans += i;
    }
  }
  return ans;
};

// Runtime: 272 ms, faster than 61.36% of JavaScript online submissions for Evaluate the Bracket Pairs of a String.
// Memory Usage: 78.1 MB, less than 61.36% of JavaScript online submissions for Evaluate the Bracket Pairs of a String.
