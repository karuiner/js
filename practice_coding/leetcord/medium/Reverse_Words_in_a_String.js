/*
 *
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = "",
    sub = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== " ") {
      sub += s[i];
    } else {
      if (sub.length > 0) {
        if (ans.length > 0) {
          ans = sub + " " + ans;
        } else {
          ans = sub;
        }
      }
      sub = "";
    }
    if (i === s.length - 1 && sub.length > 0) {
      if (ans.length > 0) {
        ans = sub + " " + ans;
      } else {
        ans = sub;
      }
    }
  }

  return ans;
};

// Runtime: 159 ms, faster than 5.12% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 40.8 MB, less than 26.77% of JavaScript online submissions for Reverse Words in a String.
