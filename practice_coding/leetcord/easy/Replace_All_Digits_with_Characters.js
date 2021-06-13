/*
 *
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
  let ns = "";
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      ns += s[i];
    } else {
      ns += String.fromCharCode(s[i - 1].charCodeAt(0) + Number(s[i]));
    }
  }
  return ns;
};

// Runtime: 76 ms, faster than 86.19% of JavaScript online submissions for Replace All Digits with Characters.
// Memory Usage: 39 MB, less than 21.42% of JavaScript online submissions for Replace All Digits with Characters.
