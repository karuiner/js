/*
 *
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let db = {};
  db["t"] = {};
  for (let i = 0; i < words.length; i++) {
    if (db[i] === undefined) {
      db[i] = {};
    }
    for (let j of words[i]) {
      if (db[i][j] === undefined) {
        db[i][j] = 1;
      } else {
        db[i][j]++;
      }
      if (db["t"][j] === undefined) {
        db["t"][j] = true;
      }
    }
  }
  let ans = [];
  for (let i in db["t"]) {
    let min = 100;
    for (let j = 0; j < words.length; j++) {
      if (db[j][i] !== undefined) {
        min = db[j][i] < min ? db[j][i] : min;
      } else {
        min = 0;
      }
    }

    ans = ans.concat(Array(min).fill(i));
  }
  return ans;
};

// Runtime: 140 ms, faster than 27.24% of JavaScript online submissions for Find Common Characters.
// Memory Usage: 49.6 MB, less than 8.24% of JavaScript online submissions for Find Common Characters.
