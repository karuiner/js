/*
 *
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let db = {};
  for (let i of brokenLetters.split("")) {
    db[i] = 1;
  }
  let ans = 0;
  for (let i of text.split(" ")) {
    let work = true;
    for (let j of i) {
      if (db[j]) {
        work = false;
        break;
      }
    }
    if (work) {
      ans++;
    }
  }
  return ans;
};

// Runtime: 72 ms, faster than 88.35% of JavaScript online submissions for Maximum Number of Words You Can Type.
// Memory Usage: 40.9 MB, less than 13.53% of JavaScript online submissions for Maximum Number of Words You Can Type.
