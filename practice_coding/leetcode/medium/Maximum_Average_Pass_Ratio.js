/*
 *
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  let db = [],
    n = classes.length;
  function cal(arr, x) {
    return (arr[0] + x) / (arr[1] + x);
  }

  function f(s, idx, e, arr) {
    let ans = 0;
    if (idx >= n) {
      console.log(s, arr);
      return s;
    }
    for (let i = 0; i <= e; i++) {
      arr[idx] = i;
      let b = cal(classes[idx], i);
      let k = f(s + b, idx + 1, e - i, arr);
      if (k > ans) {
        ans = k;
      }
    }
    return ans;
  }
  let arr = Array(n).fill(0);
  let ans = f(0, 0, extraStudents, arr) / n;

  return Number(ans.toFixed(5));
};
