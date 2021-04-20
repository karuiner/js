/*
 *
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let ans = [];
  for (let i of ops) {
    if (i === "C") ans = ans.slice(0, -1);
    if (i === "D") ans.push(Number(ans[ans.length - 1] * 2));
    if (i === "+") ans.push(Number(ans[ans.length - 1] + ans[ans.length - 2]));
    if (!isNaN(i)) ans.push(Number(i));
  }
  return ans.reduce((acc, x) => acc + x);
};
//Runtime: 88 ms, faster than 24.14% of JavaScript online submissions for Baseball Game.
//Memory Usage: 43.6 MB, less than 8.46% of JavaScript online submissions for Baseball Game.
