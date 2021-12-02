/*
 *
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let find = false,
    nw = "";
  for (let i of word) {
    if (!find) {
      nw = i + nw;
      if (i === ch) {
        find = true;
      }
    } else {
      nw += i;
    }
  }

  return find ? nw : word;
};

// Runtime: 76 ms, faster than 62.31% of JavaScript online submissions for Reverse Prefix of Word.
// Memory Usage: 40.2 MB, less than 10.39% of JavaScript online submissions for Reverse Prefix of Word.
