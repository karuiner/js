// 풀이중
/*
 *
 * @param {number[][]} segments
 * @return {number[][]}
 */
var splitPainting = function (segments) {
  function f(ans, arr) {
    let nans = [];
    if (ans.length === 0) {
      nans.push(arr);
    } else if (arr[1] <= ans[0][0]) {
      nans = nans.concat([arr, ...ans]);
    } else if (arr[0] >= ans[ans.length - 1][1]) {
      nans = nans.concat([...ans, arr]);
    } else {
      for (let [a, b, c] of ans) {
        let [s, e, v] = arr;
        if (s === a && e === b && arr.length > 0) {
          nans.push([a, b, c + v]);
          arr = [];
        } else if (s === a && arr.length > 0) {
          if (b > e) {
            nans = nans.concat([
              [a, e, v + c],
              [e, b, c],
            ]);
            arr = [];
          } else {
            nans = nans.concat([[a, b, v + c]]);
            arr = [b, e, v];
          }
        } else if (e === b && arr.length > 0) {
          if (a > s) {
            nans = nans.concat([
              [s, a, v],
              [a, b, c + v],
            ]);
          } else {
            nans = nans.concat([
              [a, s, c],
              [s, b, c + v],
            ]);
          }
          arr = [];
        } else if (e > a && e < b && arr.length > 0) {
          nans = nans.concat([
            [s, a, v],
            [a, e, c + v],
            [e, b, c],
          ]);
          arr = [];
        } else if (s > a && s < b && arr.length > 0) {
          nans = nans.concat([
            [a, s, c],
            [s, b, c + v],
          ]);
          arr = [b, e, v];
        } else {
          nans.push([a, b, c]);
        }
      }
      if (arr.length > 0) {
        nans.push(arr);
      }
    }
    return nans;
  }

  let ans = [];
  for (let i of segments) {
    ans = f(ans, i);
  }
  return ans;
};
