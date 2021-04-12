/*
 *
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let db = {};
  for (let i of arr) {
    db[i] = db[i] === undefined ? 1 : db[i] + 1;
  }
  let ans = -1;
  for (let i in db) {
    if (Number(i) === db[i]) ans = db[i] > ans ? db[i] : ans;
  }

  return ans;
};
