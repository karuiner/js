/*
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let arr = candidates,
    db = {};
  function f(sel, x) {
    let ans = [];
    for (let i of arr) {
      if (x - i === 0) {
        let sub = [...sel, i];
        sub.sort((a, b) => a - b);
        if (db[sub] === undefined) {
          db[sub] = true;
          ans.push(sub);
        }
      } else if (x - i > 0) {
        let p = f([...sel, i], x - i);
        ans = ans.concat(p);
      }
    }
    return ans;
  }

  return f([], target);
};

// Runtime: 160 ms, faster than 17.83% of JavaScript online submissions for Combination Sum.
// Memory Usage: 45.9 MB, less than 13.27% of JavaScript online submissions for Combination Sum.
