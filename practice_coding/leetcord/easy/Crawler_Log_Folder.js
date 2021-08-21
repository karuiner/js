/*
 *
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let ans = 0;
  for (let i of logs) {
    if (i === "../") {
      if (ans > 0) {
        ans--;
      }
    } else if (i === "./") {
    } else {
      ans++;
    }
  }

  return ans;
};
// Runtime: 137 ms, faster than 5.33% of JavaScript online submissions for Crawler Log Folder.
// Memory Usage: 40.5 MB, less than 37.87% of JavaScript online submissions for Crawler Log Folder.
