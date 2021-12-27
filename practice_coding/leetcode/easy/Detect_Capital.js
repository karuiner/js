/*
 *
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  function check(a) {
    return a !== a.toLowerCase();
  }
  let t = 0,
    f = 0,
    n = word.length,
    ans = false;
  for (let i of word) {
    if (check(i)) {
      t++;
    } else {
      f++;
    }
  }
  if (t === n || f === n || (t === 1 && check(word[0]))) {
    ans = true;
  }

  return ans;
};

// Runtime: 80 ms, faster than 71.75% of JavaScript online submissions for Detect Capital.
// Memory Usage: 40.6 MB, less than 6.32% of JavaScript online submissions for Detect Capital.
