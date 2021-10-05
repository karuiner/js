/*
 *
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  let db = {};
  for (let i of arr) {
    let k = i.toString(2).match(/1/g);
    k = k === null ? 0 : k.length;
    db[k] = db[k] === undefined ? [i] : db[k].concat(i);
  }
  let q = Object.keys(db),
    ans = [];
  q.sort((x, y) => x - y);
  for (let i of q) {
    let u = db[i];
    u.sort((x, y) => x - y);
    ans = [...ans, ...u];
  }
  return ans;
};

//Runtime: 120 ms, faster than 50.24% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
//Memory Usage: 45.4 MB, less than 12.20% of JavaScript online submissions for Sort Integers by The Number of 1 Bits.
