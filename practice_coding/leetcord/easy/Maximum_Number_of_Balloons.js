/*
 *
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  let db = { b: 0, a: 0, l: 0, o: 0, n: 0 },
    ndb = { b: 1, a: 1, l: 2, o: 2, n: 1 };

  text = text.toLowerCase();
  for (let i of text) {
    if (db[i] !== undefined) {
      db[i] = db[i] + 1;
    }
  }
  let ans = -1;
  for (let i in db) {
    let k = Math.floor(db[i] / ndb[i]);
    if (ans < 0) {
      ans = k;
    } else {
      ans = ans < k ? ans : k;
    }
  }
  return ans < 1 ? 0 : ans;
};
// Runtime: 72 ms, faster than 98.48% of JavaScript online submissions for Maximum Number of Balloons.
// Memory Usage: 41 MB, less than 27.00% of JavaScript online submissions for Maximum Number of Balloons.
