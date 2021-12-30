/*
 *
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  let j = 0,
    ans = "";
  for (let i = 0; i < s.length; i++) {
    if (spaces[j] === undefined || i < spaces[j]) {
      ans += s[i];
    } else {
      ans += " " + s[i];
      j++;
    }
  }
  return ans;
};

// Runtime: 313 ms, faster than 12.03% of JavaScript online submissions for Adding Spaces to a String.
// Memory Usage: 95.2 MB, less than 32.99% of JavaScript online submissions for Adding Spaces to a String.
