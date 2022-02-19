/*
 *
 * @param {number[]} nums
 * @return {number}
 */
// 내가 작성한 코드
var countElements = function (nums) {
  let db = {},
    arr = [],
    n = 0;
  for (let i of nums) {
    if (db[i] === undefined) {
      arr.push(i);
      db[i] = 1;
      n++;
    } else {
      db[i]++;
    }
  }
  arr.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 1; i < n - 1; i++) {
    ans += db[arr[i]];
  }
  return ans;
};

// Runtime: 73 ms, faster than 82.99% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
// Memory Usage: 44.9 MB, less than 5.22% of JavaScript online submissions for Count Elements With Strictly Smaller and Greater Elements .
