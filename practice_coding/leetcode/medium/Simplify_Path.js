/*
 *
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let p = [],
    s = "";
  for (let i of path.slice(1)) {
    if (i === "/") {
      if (s === ".") {
        s = "";
      } else if (s === "..") {
        s = "";
        p = p.slice(0, -1);
      } else if (s.length > 0) {
        p.push(s);
        s = "";
      }
    } else {
      s += i;
    }
  }
  if (s === ".") {
    s = "";
  } else if (s === "..") {
    s = "";
    p = p.slice(0, -1);
  } else if (s.length > 0) {
    p.push(s);
    s = "";
  }
  return "/" + p.join("/");
};

// Runtime: 84 ms, faster than 66.28% of JavaScript online submissions for Simplify Path.
// Memory Usage: 40.6 MB, less than 42.80% of JavaScript online submissions for Simplify Path.
