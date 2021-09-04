/*
 *
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  let f = (x, y) => x ** 2 + y ** 2,
    db = {};
  for (let [x, y] of points) {
    let l = f(x, y);
    if (db[l]) {
      db[l] = [...db[l], [x, y]];
    } else {
      db[l] = [[x, y]];
    }
  }
  let key = Object.keys(db);
  key.sort((a, b) => Number(a) - Number(b));
  let ans = [];
  for (let i of key) {
    if (ans.length < k) {
      ans = ans.concat(db[i]);
    } else {
      break;
    }
  }
  return ans;
};

// Runtime: 902 ms, faster than 6.28% of JavaScript online submissions for K Closest Points to Origin.
// Memory Usage: 94.5 MB, less than 5.09% of JavaScript online submissions for K Closest Points to Origin.
