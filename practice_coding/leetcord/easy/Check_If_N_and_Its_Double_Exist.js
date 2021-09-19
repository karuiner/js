/*
 *
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let db = {},
    ans = false;
  for (let i of arr) {
    if (db[2 * i] || db[i / 2]) {
      ans = true;
      break;
    } else {
      db[i] = 1;
    }
  }
  return ans;
};

// Runtime: 80 ms, faster than 55.79% of JavaScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 40.4 MB, less than 35.47% of JavaScript online submissions for Check If N and Its Double Exist.
