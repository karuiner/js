/*
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let db = {},
    n = nums.length;
  function f(arr, s, k) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
      if (k < n) {
        let sub = f(
          [...arr.slice(0, i), ...arr.slice(i + 1)],
          s.length === 0 ? `${arr[i]}` : s + `_${arr[i]}`,
          k + 1
        );
        ans = ans.concat(sub);
      } else {
        let ss = s.length === 0 ? `${arr[i]}` : s + `_${arr[i]}`;
        if (db[ss] === undefined) {
          db[ss] = true;
          ans.push(ss.split("_").map(Number));
        }
      }
    }
    return ans;
  }
  return f(nums, "", 1);
};

// Runtime: 295 ms, faster than 17.66% of JavaScript online submissions for Permutations II.
// Memory Usage: 49.3 MB, less than 20.71% of JavaScript online submissions for Permutations II.
