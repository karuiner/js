/*
 *
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let ans = true,
    k = 0;
  for (let i of s.split(" ")) {
    if (!isNaN(i)) {
      if (Number(i) > k) {
        k = Number(i);
      } else {
        ans = false;
        break;
      }
    }
  }
  return ans;
};

// Runtime: 68 ms, faster than 93.92% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.
// Memory Usage: 38.8 MB, less than 59.67% of JavaScript online submissions for Check if Numbers Are Ascending in a Sentence.
