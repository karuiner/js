/*
 *
 * @param {number[][]} intervals
 * @return {number[][]}
 */

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
