/*
 *
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */

// 수정 버전 하지만 통일한 문제발생(연산속도가 부족하다. 효율성 문제). 알고리즘의 구조를 다시 생각해야할 듯하다.
// 모든 대상에 대해 계산을 진행하였지만 대상을 선택하는게 효율적인지 여부를 확인해야겠다.
var maxAverageRatio = function (classes, extraStudents) {
  let db = [],
    n = classes.length,
    e = extraStudents;
  function cal(arr, x = 0) {
    return (arr[0] + x) / (arr[1] + x);
  }
  let base = 0,
    idx = 0,
    sub = [];
  for (let i of classes) {
    for (let j = 0; j <= e; j++) {
      if (j === 0) {
        base += cal(i);
      }
      if (sub[idx] === undefined) {
        sub[idx] = [];
      }
      sub[idx][j] = cal(i, j);
    }
    idx++;
  }
  function f(idx, e) {
    let ans = 0;
    if (idx < n) {
      if (db[idx] === undefined) {
        db[idx] = [];
      }
      if (db[idx][e] === undefined) {
        for (let i = 0; i <= e; i++) {
          let s = sub[idx][i] + f(idx + 1, e - i);
          if (s > ans) {
            ans = s;
          }
        }
        db[idx][e] = ans;
      } else {
        ans = db[idx][e];
      }
    }
    return ans;
  }
  let ans = f(0, e) / n;

  return Number(ans.toFixed(5));
};

// var maxAverageRatio = function (classes, extraStudents) {
//   let db = [],
//     n = classes.length;
//   function cal(arr, x) {
//     return (arr[0] + x) / (arr[1] + x);
//   }

//   function f(s, idx, e, arr) {
//     let ans = 0;
//     if (idx >= n) {
//       console.log(s, arr);
//       return s;
//     }
//     for (let i = 0; i <= e; i++) {
//       arr[idx] = i;
//       let b = cal(classes[idx], i);
//       let k = f(s + b, idx + 1, e - i, arr);
//       if (k > ans) {
//         ans = k;
//       }
//     }
//     return ans;
//   }
//   let arr = Array(n).fill(0);
//   let ans = f(0, 0, extraStudents, arr) / n;

//   return Number(ans.toFixed(5));
// };
