/*
 *
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function (queries, pattern) {
  function get(pt) {
    let p = [],
      s = "";
    for (let i of pt) {
      if (i === i.toUpperCase()) {
        if (s.length > 0 && s[0] === s[0].toUpperCase()) {
          p.push(s);
        }
        s = i;
      } else {
        s += i;
      }
    }
    p.push(s);
    return p;
  }
  let b = get(pattern),
    ans = [],
    n = b.length;
  for (let i of queries) {
    let check = true;
    let q = get(i);
    if (n === q.length) {
      for (let i = 0; i < n; i++) {
        let l = 0;
        for (let j of q[i]) {
          if (j === b[i][l]) {
            l++;
          }
        }
        if (l !== b[i].length) {
          check = false;
          break;
        }
      }
    } else {
      check = false;
    }
    ans.push(check);
  }

  return ans;
};

// Runtime: 72 ms, faster than 85.15% of JavaScript online submissions for Camelcase Matching.
// Memory Usage: 40.9 MB, less than 7.92% of JavaScript online submissions for Camelcase Matching.
