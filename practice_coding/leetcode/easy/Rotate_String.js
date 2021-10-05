/*
 *
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  let n = s.length,
    db = {};
  for (let i = 0; i < n; i++) {
    if (db[s[i]]) {
      db[s[i]].push(i);
    } else {
      db[s[i]] = [i];
    }
  }
  let ans = false;
  if (db[goal[0]]) {
    for (let i of db[goal[0]]) {
      let dummy = s.slice(i) + s.slice(0, i);
      if (dummy === goal) {
        ans = true;
        break;
      }
    }
  }
  return ans;
};

// Runtime: 104 ms, faster than 22.15% of JavaScript online submissions for Rotate String.
// Memory Usage: 39.7 MB, less than 25.81% of JavaScript online submissions for Rotate String.
