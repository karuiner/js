/*
 *
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function (operations) {
  let ans = 0;
  for (let i of operations) {
    if (i === "--X" || i === "X--") {
      ans--;
    } else {
      ans++;
    }
  }

  return ans;
};

// Runtime: 68 ms, faster than 97.29% of JavaScript online submissions for Final Value of Variable After Performing Operations.
// Memory Usage: 40.5 MB, less than 16.45% of JavaScript online submissions for Final Value of Variable After Performing Operations.
