/*
 *
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {
  let ans = 0;
  for (let i of patterns) {
    if (word.includes(i)) {
      ans++;
    }
  }
  return ans;
};

// Runtime: 122 ms, faster than 5.52% of JavaScript online submissions for Number of Strings That Appear as Substrings in Word.
// Memory Usage: 39.9 MB, less than 50.00% of JavaScript online submissions for Number of Strings That Appear as Substrings in Word.
