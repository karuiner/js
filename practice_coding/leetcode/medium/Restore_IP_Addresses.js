/*
 *
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let ans = [];
  function check(s) {
    let ans = true;
    if (s.length > 1 && s[0] === "0") {
      ans = false;
    }
    if (ans && Number(s) > 255) {
      ans = false;
    }
    return ans;
  }

  function f(s, v, k) {
    let ans = [];

    for (let i = 1; i <= 3; i++) {
      let c = s.slice(0, i),
        ns = s.slice(i);
      if (k > 1) {
        if (ns.length / (k - 1) >= 1 && check(c)) {
          let sub = f(ns, v + c + ".", k - 1);
          ans = ans.concat(sub);
        }
      } else if (s.length === i) {
        if (check(c)) {
          ans.push(v + c);
        }
      }
    }
    return ans;
  }

  if (s.length >= 4 && s.length <= 12) {
    return f(s, "", 4);
  }

  return ans;
};

// Runtime: 77 ms, faster than 71.11% of JavaScript online submissions for Restore IP Addresses.
// Memory Usage: 43.1 MB, less than 54.82% of JavaScript online submissions for Restore IP Addresses.
