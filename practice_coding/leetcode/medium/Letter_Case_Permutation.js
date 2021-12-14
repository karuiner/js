/*
 *
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  let p = s.toLowerCase();
  function f(s) {
    let i = s.length,
      ans = [];
    if (i === p.length) {
      return [s];
    }
    if (isNaN(p[i])) {
      ans = [
        ...ans,
        ...f(s + p[i].toLowerCase()),
        ...f(s + p[i].toUpperCase()),
      ];
    } else {
      let q = f(s + p[i]);
      ans = [...ans, ...q];
    }
    return ans;
  }
  return f("");
};

// Runtime: 96 ms, faster than 46.36% of JavaScript online submissions for Letter Case Permutation.
// Memory Usage: 46.4 MB, less than 7.28% of JavaScript online submissions for Letter Case Permutation.
