/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

// 풀이시도 1 - 시간초과
var fourSum = function (nums, target) {
  let db = {},
    n = nums.length;
  if (n < 4) {
    return [];
  }
  function mks(s, v) {
    if (s.length === 0) {
      return `${v}`;
    } else {
      return `${s}_${v}`;
    }
  }

  function f(nums, c, s) {
    let ans = [];
    if (c > 0) {
      for (let i = 0; i < nums.length - c + 1; i++) {
        let sub = f([...nums.slice(i + 1)], c - 1, mks(s, nums[i]));
        ans = ans.concat(sub);
      }
    } else {
      let sm = 0,
        arr = s.split("_").map((x) => {
          x = Number(x);
          sm += x;
          return x;
        });
      arr.sort((a, b) => a - b);
      let k = arr.join("_");
      if (db[k] === undefined) {
        if (sm === target) {
          db[k] = true;
          ans.push(s.split("_").map(Number));
        } else {
          db[k] = false;
        }
      }
    }
    return ans;
  }

  return f(nums, 4, "");
};
