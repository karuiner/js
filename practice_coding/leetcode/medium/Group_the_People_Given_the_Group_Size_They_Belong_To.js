/*
 *
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let db = {};
  for (let i = 0; i < groupSizes.length; i++) {
    if (db[groupSizes[i]]) {
      db[groupSizes[i]].push(i);
    } else {
      db[groupSizes[i]] = [i];
    }
  }
  let ans = [];
  for (let i in db) {
    let k = Number(i);
    for (let j = 0; j < db[i].length; j += k) {
      ans.push(db[i].slice(j, j + k));
    }
  }
  return ans;
};

// Runtime: 166 ms, faster than 14.01% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
// Memory Usage: 44.9 MB, less than 40.13% of JavaScript online submissions for Group the People Given the Group Size They Belong To.
