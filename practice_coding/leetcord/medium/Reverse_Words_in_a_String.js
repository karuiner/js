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

// Runtime: 83 ms, faster than 42.13% of JavaScript online submissions for Reverse Words in a String.
// Memory Usage: 40.7 MB, less than 35.14% of JavaScript online submissions for Reverse Words in a String.
