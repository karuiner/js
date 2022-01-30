/*
 *
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let db = {},
    key = [];
  for (let i of words) {
    if (db[i] === undefined) {
      db[i] = 1;
      key.push(i);
    } else {
      db[i]++;
    }
  }
  key.sort((a, b) => (db[b] === db[a] ? (a < b ? -1 : 1) : db[b] - db[a]));
  return key.slice(0, k);
};

// Runtime: 134 ms, faster than 30.71% of JavaScript online submissions for Top K Frequent Words.
// Memory Usage: 45.4 MB, less than 13.98% of JavaScript online submissions for Top K Frequent Words.
