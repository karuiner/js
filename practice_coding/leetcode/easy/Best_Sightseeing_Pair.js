/*
 *
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let n = values.length,
    ans = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let v = values[i] + values[j] + (i - j);
      ans = ans < v ? v : ans;
    }
  }
  return ans;
};

// Runtime: 6916 ms, faster than 13.33% of JavaScript online submissions for Best Sightseeing Pair.
// Memory Usage: 44.1 MB, less than 75.71% of JavaScript online submissions for Best Sightseeing Pair.
