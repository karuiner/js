/*
 *
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  let pn = part.length,
    n = s.length;
  while (true) {
    let a = "",
      k = s.indexOf(part);
    if (k >= 0) {
      a = a + s.slice(0, k) + s.slice(k + pn);
    } else {
      a = s;
    }
    if (n === a.length) {
      s = a;
      break;
    } else {
      s = a;
      n = s.length;
    }
  }
  return s;
};

// Runtime: 60 ms, faster than 98.25% of JavaScript online submissions for Remove All Occurrences of a Substring.
// Memory Usage: 39.8 MB, less than 92.40% of JavaScript online submissions for Remove All Occurrences of a Substring.
