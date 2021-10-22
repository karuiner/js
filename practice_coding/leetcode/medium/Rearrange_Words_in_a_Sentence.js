/*
 *
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  let db = {};
  for (let i of text.split(" ")) {
    let k = i.length;
    if (db[k] !== undefined) {
      db[k] += " " + i;
    } else {
      db[k] = i;
    }
  }
  let key = Object.keys(db);
  key.sort((a, b) => Number(a) - Number(b));
  let ans = "";
  for (let i of key) {
    if (ans.length > 0) {
      ans += " " + db[i].toLowerCase();
    } else {
      ans += db[i][0].toUpperCase() + db[i].slice(1);
    }
  }
  return ans;
};
// Runtime: 141 ms, faster than 35.14% of JavaScript online submissions for Rearrange Words in a Sentence.
// Memory Usage: 45.9 MB, less than 21.62% of JavaScript online submissions for Rearrange Words in a Sentence.
