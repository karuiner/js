/*
 *
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let ans = [1];
  while (rowIndex > 0) {
    let sub = [],
      c = 0;
    for (let i of ans) {
      sub.push(i + c);
      c = i;
    }
    ans = [...sub, 1];
    rowIndex--;
  }
  return ans;
};

// Runtime: 72 ms, faster than 71.41% of JavaScript online submissions for Pascal's Triangle II.
// Memory Usage: 40.2 MB, less than 10.28% of JavaScript online submissions for Pascal's Triangle II.
