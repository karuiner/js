/*
 *
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  function cal(s) {
    let l = 0,
      p = "",
      arr = [],
      sub = [];
    for (let i of s) {
      if (i === "(" && l === 0) {
        sub = [];
        l++;
      } else if (i === "(" && l > 0) {
        p += i;
        l++;
      } else if (l > 2) {
        p += i;
        l--;
      } else if (l === 2) {
        p += i;
        sub.push(...cal(p));
        p = "";
        l--;
      } else {
        let v = 1;
        if (sub.length > 0) {
          let v = 0;
          for (let i of sub) {
            v += i;
          }
          sub = 2 * v;
        } else {
          sub = 1;
        }

        arr.push(sub);
        sub = "";
        l = 0;
      }
    }
    return arr;
  }

  return cal(s).reduce((acc, x) => acc + x, 0);
};
// Runtime: 76 ms, faster than 59.26% of JavaScript online submissions for Score of Parentheses.
// Memory Usage: 40.4 MB, less than 5.56% of JavaScript online submissions for Score of Parentheses.
