/*
 *
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */

// 시도 1
var smallestStringWithSwaps = function (s, pairs) {
  let check = false,
    arr = s.split(""),
    ans = s;
  while (!check) {
    check = true;
    for (let [i, j] of pairs) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        check = false;
        break;
      }
    }
    if (check) {
      ans = arr.join("");
      break;
    }
  }
  return ans;
};
