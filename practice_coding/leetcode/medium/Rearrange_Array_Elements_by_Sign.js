/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let p = [],
    m = [];
  for (let i of nums) {
    if (i < 0) {
      m.push(i);
    } else {
      p.push(i);
    }
  }
  let ans = [];
  for (let i = 0; i < p.length; i++) {
    ans[i * 2] = p[i];
    ans[i * 2 + 1] = m[i];
  }
  return ans;
};

// Runtime: 352 ms, faster than 95.44% of JavaScript online submissions for Rearrange Array Elements by Sign.
// Memory Usage: 91.2 MB, less than 80.51% of JavaScript online submissions for Rearrange Array Elements by Sign.
