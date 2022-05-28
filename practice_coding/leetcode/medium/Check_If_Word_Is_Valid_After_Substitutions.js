/*
 *
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let ans = true;
  while (s.length > 0) {
    let k = s.length;
    s = s.replace("abc", "");
    if (k === s.length) {
      ans = false;
      break;
    }
  }

  return ans;
};

// Runtime: 297 ms, faster than 32.69% of JavaScript online submissions for Check If Word Is Valid After Substitutions.
// Memory Usage: 48.7 MB, less than 15.38% of JavaScript online submissions for Check If Word Is Valid After Substitutions.
