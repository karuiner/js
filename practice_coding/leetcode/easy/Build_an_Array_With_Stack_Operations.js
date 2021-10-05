/*
 *
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  let j = 0,
    ans = [];
  for (let i = 1; i <= n; i++) {
    if (i === target[j]) {
      ans.push("Push");
      j++;
    } else {
      ans.push("Push", "Pop");
    }
    if (target[j] === undefined) break;
  }
  return ans;
};
//Runtime: 72 ms, faster than 93.79% of JavaScript online submissions for Build an Array With Stack Operations.
//Memory Usage: 38.7 MB, less than 41.61% of JavaScript online submissions for Build an Array With Stack Operations.
