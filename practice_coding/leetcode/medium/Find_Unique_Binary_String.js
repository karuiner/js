/*
 *
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
  let n = nums[0].length;
  let ans = "".padStart(n, "0");
  let db = {};
  for (let i of nums) {
    db[i] = true;
  }
  function f(s, i) {
    let sub = false;
    if (db[s] === undefined) {
      return s;
    } else if (i < n) {
      if (s[i] === "0") {
        sub = f(s.slice(0, i) + "1" + s.slice(i + 1), i);
      }
      if (!sub) {
        sub = f(s, i + 1);
      }
    }
    return sub;
  }
  return f(ans, 0);
};

// Runtime: 136 ms, faster than 14.06% of JavaScript online submissions for Find Unique Binary String.
// Memory Usage: 40.2 MB, less than 29.69% of JavaScript online submissions for Find Unique Binary String.
