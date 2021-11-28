/*
 *
 * @param {string} encodedText
 * @param {number} rows
 * @return {string}
 */
var decodeCiphertext = function (encodedText, rows) {
  let n = encodedText.length;
  let x = n / rows,
    ans = "";
  for (let i = 0; i < x; i++) {
    for (let j = i; j < n; j += x + 1) {
      ans += encodedText[j];
    }
  }

  return ans.trimEnd();
};

// Runtime: 516 ms, faster than 16.00% of JavaScript online submissions for Decode the Slanted Ciphertext.
// Memory Usage: 92.7 MB, less than 69.00% of JavaScript online submissions for Decode the Slanted Ciphertext.
