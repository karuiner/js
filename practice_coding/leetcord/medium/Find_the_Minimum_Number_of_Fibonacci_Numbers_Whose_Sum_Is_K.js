/*
 *
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
  let arr = [1];
  function f(a, b, arr, l) {
    [a, b] = [b, a + b];

    if (b <= l) {
      if (arr.slice(-1)[0] < b) {
        arr.push(b);
      }
      return f(a, b, arr, l);
    }
  }
  f(1, 1, arr, k);
  let ans = 0;
  while (k > 0) {
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] <= k) {
        k -= arr[i];
        arr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        ans++;
        break;
      }
    }
  }

  return ans;
};

// Runtime: 84 ms, faster than 58.33% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.
// Memory Usage: 44.4 MB, less than 8.33% of JavaScript online submissions for Find the Minimum Number of Fibonacci Numbers Whose Sum Is K.
