/*
 *
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let a = 0,
    b = 0,
    c = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    if (c.includes(s[i].toLowerCase())) {
      if (i < s.length / 2) {
        a++;
      } else {
        b++;
      }
    }
  }
  return a == b;
};

//Runtime: 72 ms, faster than 98.70% of JavaScript online submissions for Determine if String Halves Are Alike.
//Memory Usage: 40.8 MB, less than 16.10% of JavaScript online submissions for Determine if String Halves Are Alike.
