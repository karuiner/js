/*
 *
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let db = {};
  for (let i of s) {
    db[i] = db[i] === undefined ? 1 : db[i] + 1;
  }
  let list = Object.keys(db);
  list.sort((a, b) => db[b] - db[a]);
  let ans = "";
  for (let i of list) {
    ans += "".padStart(db[i], i);
  }
  return ans;
};
//Runtime: 88 ms, faster than 92.56% of JavaScript online submissions for Sort Characters By Frequency.
//Memory Usage: 40.8 MB, less than 97.67% of JavaScript online submissions for Sort Characters By Frequency.
