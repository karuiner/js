/*
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */

// 풀이 완료
var merge = function (intervals) {
  let dp = Array(10000).fill(-1),
    min = 10000,
    max = 0,
    ans = [],
    k = 0;

  for (let [a, b] of intervals) {
    let z = -1,
      x = -1;
    min = a - 1 < min ? a - 1 : min;
    max = b - 1 > max ? b - 1 : max;
    if (dp[a - 1] === -1) {
      z = k;
      k++;
    } else {
      z = dp[a - 1];
    }
    if (dp[b - 1] !== -1) {
      x = dp[b - 1];
    }

    for (let i = a - 1; i < b; i++) {
      dp[i] = z;
    }
    if (x !== -1) {
      let i = b;
      while (dp[b] === x) {
        dp[b] = z;
        b++;
      }
    }
  }
  let q = -1,
    mx = -1,
    mn = -1;
  for (let i = min; i <= max + 1; i++) {
    if (q === -1 && dp[i] !== -1) {
      mn = i + 1;
      q = dp[i];
    } else if (dp[i] !== q) {
      if (dp[i] === -1) {
        mx = i;
        q = -1;
        ans.push([mn, mx]);
      } else {
        ans.push([mn, i]);
        mn = i + 1;
        q = dp[i];
      }
    }
  }

  return ans;
};

// Runtime: 166 ms, faster than 34.45% of JavaScript online submissions for Merge Intervals.
// Memory Usage: 52.6 MB, less than 5.87% of JavaScript online submissions for Merge Intervals.

// 풀이시도  1  -  167 / 169 test cases passed. - Runtime Error - heap out of memory

var merge = function (intervals) {
  function merge(x, y) {
    let [a, b] = x,
      [c, d] = y;
    if (b < c || d < a) {
      return false;
    } else {
      return true;
    }
  }
  function f(arr) {
    let [s, e] = arr[0],
      n = arr.length,
      next = [],
      ans = [];
    for (let i = 1; i < n; i++) {
      let [a, b] = arr[i];
      if (merge([s, e], [a, b])) {
        s = s < a ? s : a;
        e = e > b ? e : b;
      } else {
        next.push(arr[i]);
      }
    }
    if (next.length === n - 1) {
      ans.push([s, e]);
    } else {
      next.push([s, e]);
    }
    if (next.length > 1) {
      let otr = f(next);
      ans = ans.concat(otr);
    } else {
      ans = ans.concat(next);
    }

    return ans;
  }

  return f(intervals);
};
