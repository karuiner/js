/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  let ans = [],
    count = {};
  for (let i of nums) {
    count[i] = count[i] ? count[i] + 1 : 1;
  }
  for (let i of Object.keys(count)) {
    if (count[i] === 1) {
      ans.push(Number(i));
    }
  }
  return ans;
};
// Runtime: 80 ms, faster than 82.31% of JavaScript online submissions for Single Number III.
// Memory Usage: 42.5 MB, less than 26.71% of JavaScript online submissions for Single Number III.
