/*
 *
 * @param {number[][]} logs
 * @param {number} k
 * @return {number[]}
 */
var findingUsersActiveMinutes = function (logs, k) {
  let ans = Array(k).fill(0),
    db = {};
  for (let [i, v] of logs) {
    if (db[i] === undefined) {
      db[i] = {};
      db[i][v] = 1;
    } else if (db[i][v] === undefined) {
      db[i][v] = 1;
    }
  }
  for (let i in db) {
    let k = Object.keys(db[i]).length;
    ans[k - 1] += 1;
  }
  return ans;
};

//Runtime: 348 ms, faster than 48.15% of JavaScript online submissions for Finding the Users Active Minutes.
//Memory Usage: 59.9 MB, less than 68.25% of JavaScript online submissions for Finding the Users Active Minutes.
