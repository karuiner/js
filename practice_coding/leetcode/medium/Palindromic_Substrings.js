/*
 *
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  function check(s) {
    let ans = true;
    if (s.length > 1) {
      let k = s.length % 2 === 0 ? s.length / 2 : (s.length - 1) / 2;
      for (let i = 0; i < k; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
          ans = false;
        }
      }
    }
    return ans;
  }
  let ans = s.length;
  for (let i = 2; i <= s.length; i++) {
    for (j = 0; j <= s.length - i; j++) {
      if (check(s.slice(j, j + i))) {
        ans++;
      }
    }
  }

  return ans;
};
// Runtime: 1000 ms, faster than 10.60% of JavaScript online submissions for Palindromic Substrings.
// Memory Usage: 45.5 MB, less than 30.13% of JavaScript online submissions for Palindromic Substrings.
