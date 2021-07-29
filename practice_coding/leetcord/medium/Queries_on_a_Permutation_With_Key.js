/*
 *
 * @param {number[]} queries
 * @param {number} m
 * @return {number[]}
 */
var processQueries = function (queries, m) {
  let p = [],
    ans = [];
  for (let i = 0; i < m; i++) {
    p[i] = i + 1;
  }
  for (let i of queries) {
    let j = p.indexOf(i);
    ans.push(j);
    p = [p[j], ...p.slice(0, j), ...p.slice(j + 1)];
  }

  return ans;
};

// Runtime: 88 ms, faster than 67.07% of JavaScript online submissions for Queries on a Permutation With Key.
// Memory Usage: 45.5 MB, less than 7.32% of JavaScript online submissions for Queries on a Permutation With Key.
