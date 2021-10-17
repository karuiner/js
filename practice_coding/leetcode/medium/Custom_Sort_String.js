/*
 *
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  let db = {},
    n = order.length;
  order.split("").forEach((x, i) => {
    db[x] = i + 1;
  });

  let ans = s.split("");
  ans.sort((a, b) => {
    let i = db[a] ? db[a] : n + 1,
      j = db[b] ? db[b] : n + 1;
    return i - j;
  });
  return ans.join("");
};

// Runtime: 84 ms, faster than 47.34% of JavaScript online submissions for Custom Sort String.
// Memory Usage: 39.5 MB, less than 63.83% of JavaScript online submissions for Custom Sort String.
