/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let db = {};
  for (let i of nums) {
    if (db[i] === undefined) {
      db[i] = 1;
    } else {
      db[i]++;
    }
  }
  let ans = Object.keys(db).map((x) => Number(x));
  ans.sort((a, b) => {
    return db[b] - db[a];
  });
  return ans.slice(0, k);
};

// Runtime: 100 ms, faster than 50.09% of JavaScript online submissions for Top K Frequent Elements.
// Memory Usage: 41.9 MB, less than 76.15% of JavaScript online submissions for Top K Frequent Elements.
