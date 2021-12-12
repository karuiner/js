/*
 *
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  let ans = 0,
    db = {},
    ck = {};
  for (let i of tiles) {
    db[i] = db[i] === undefined ? 1 : db[i] + 1;
  }
  function f(s, db) {
    for (let i in db) {
      let sdb = { ...db };
      if (sdb[i] > 1) {
        sdb[i] -= 1;
      } else {
        delete sdb[i];
      }
      if (ck[s + i] === undefined) {
        ck[s + i] = true;
        f(s + i, sdb);
        ans++;
      }
    }
  }
  f("", db);
  return ans;
};

// Runtime: 168 ms, faster than 21.70% of JavaScript online submissions for Letter Tile Possibilities.
// Memory Usage: 53.3 MB, less than 8.53% of JavaScript online submissions for Letter Tile Possibilities.
