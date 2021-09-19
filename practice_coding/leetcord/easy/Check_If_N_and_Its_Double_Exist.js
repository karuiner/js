/*
 *
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  let db = {},
    ans = false;
  arr.sort((a, b) => Math.abs(b) - Math.abs(a));
  for (let i of arr) {
    if (db[2 * i]) {
      ans = true;
      break;
    } else {
      db[i] = 1;
    }
  }
  return ans;
};

// Runtime: 84 ms, faster than 37.06% of JavaScript online submissions for Check If N and Its Double Exist.
// Memory Usage: 40.7 MB, less than 23.42% of JavaScript online submissions for Check If N and Its Double Exist.
