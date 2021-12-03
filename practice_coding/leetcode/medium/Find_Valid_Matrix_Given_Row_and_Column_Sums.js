/*
 *
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
  let r = rowSum.length,
    c = colSum.length,
    ans = [];
  for (let i = 0; i < r; i++) {
    let sub = [];
    for (let j = 0; j < c; j++) {
      if (colSum[j] < rowSum[i]) {
        sub.push(colSum[j]);
        rowSum[i] -= colSum[j];
        colSum[j] = 0;
      } else {
        sub.push(rowSum[i]);
        colSum[j] -= rowSum[i];
        rowSum[i] = 0;
      }
    }
    ans.push(sub);
  }

  return ans;
};

// Runtime: 336 ms, faster than 70.49% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
// Memory Usage: 56.3 MB, less than 86.89% of JavaScript online submissions for Find Valid Matrix Given Row and Column Sums.
