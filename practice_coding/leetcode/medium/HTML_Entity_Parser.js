/*
 *
 * @param {string} text
 * @return {string}
 */
var entityParser = function (text) {
  let db = {
    "&quot;": '"',
    "&apos;": `'`,
    "&amp;": "&",
    "&gt;": ">",
    "&lt;": "<",
    "&frasl;": "/",
  };
  let ans = "",
    sub = "",
    on = false;
  for (let i of text) {
    if (i === "&") {
      ans += sub;
      sub = "";
      sub += i;
      on = true;
    } else if (i === ";") {
      sub += i;
      if (db[sub]) {
        ans += db[sub];
      } else {
        ans += sub;
      }
      sub = "";
      on = false;
    } else {
      if (on) {
        sub += i;
      } else {
        ans += i;
      }
    }
  }
  return ans + sub;
};

// Runtime: 252 ms, faster than 8.33% of JavaScript online submissions for HTML Entity Parser.
// Memory Usage: 55.4 MB, less than 16.67% of JavaScript online submissions for HTML Entity Parser.
