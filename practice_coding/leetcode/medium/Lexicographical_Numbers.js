/*
 *
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
  let arr = Array(n)
    .fill(0)
    .map((x, i) => i + 1);
  arr.sort((a, b) => (`${a}` < `${b}` ? -1 : 1));
  return arr;
};

// Runtime: 201 ms, faster than 12.28% of JavaScript online submissions for Lexicographical Numbers.
// Memory Usage: 47.8 MB, less than 49.12% of JavaScript online submissions for Lexicographical Numbers.
