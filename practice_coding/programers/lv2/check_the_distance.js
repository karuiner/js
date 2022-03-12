//거리두기 확인하기
// 풀이 완료

//2차 시도 [정확성: 94.0, 합계: 94.0 / 100.0]
function solution(places) {
  function r(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }

  function check(arr) {
    let p = [],
      c = 0,
      ans = 1;
    function IsOpen(a, b) {
      let [i1, j1] = a,
        [i2, j2] = b,
        ans = true,
        ans1 = true;
      let k1 = i2 - i1;
      function gotoi(i1, i2, j) {
        let ans = true;
        if (i1 > i2) {
          for (let i = i1; i >= i2; i--) {
            if (arr[i][j] === "X") {
              ans = false;
              break;
            }
          }
        } else {
          for (let i = i1; i <= i2; i++) {
            if (arr[i][j] === "X") {
              ans = false;
              break;
            }
          }
        }
        return ans;
      }
      function gotoj(j1, j2, i) {
        let ans = true;
        if (j1 > j2) {
          for (let j = j1; j >= j2; j--) {
            if (arr[i][j] === "X") {
              ans = false;
              break;
            }
          }
        } else {
          for (let j = j1; j <= j2; j++) {
            if (arr[i][j] === "X") {
              ans = false;
              break;
            }
          }
        }
        return ans;
      }

      ans = gotoi(i1, i2, j1);

      if (ans) {
        ans = gotoj(j1, j2, i2);
      }
      ans1 = gotoj(j1, j2, i1);

      if (ans1) {
        ans1 = gotoj(i1, i2, j2);
      }

      return ans || ans1;
    }
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (arr[i][j] === "P") {
          p[c] = [i, j];
          c++;
        }
      }
    }
    for (let i = 0; i < c; i++) {
      for (let j = i + 1; j < c; j++) {
        let k = i !== j ? r(p[i], p[j]) : 0;
        if (i !== j && k < 3) {
          if (IsOpen(p[i], p[j])) {
            ans = 0;
            break;
          }
        }
      }
      if (ans === 0) {
        break;
      }
    }
    return ans;
  }

  let ans = [];
  for (let i of places) {
    ans.push(check(i));
  }

  return ans;
}

// 첫시도 [정확성: 26.1,  합계: 26.1 / 100.0]
// function solution(places) {
//   function check(arr) {
//     function subcheck(a, b) {
//       let [i, j] = a,
//         [l, m] = b,
//         ans = true;
//       if (i === l) {
//         //좌우
//         let k = m - j;
//         if (k > 0) {
//           if (i > 0 && arr[l][m] === "O" && arr[l - 1][m] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (m + k < 5 && arr[l][m] === "O" && arr[l][m + 1] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (i + 1 < 5 && arr[l][m] === "O" && arr[l + 1][m] === "P") {
//             ans = false;
//             return ans;
//           }
//         } else {
//           if (i - 1 > 0 && arr[l][m] === "O" && arr[l - 1][m] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (m > 0 && arr[l][m] === "O" && arr[l][m - 1] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (i + 1 < 5 && arr[l][m] === "O" && arr[l + 1][m] === "P") {
//             ans = false;
//             return ans;
//           }
//         }
//       } else {
//         //상하
//         let k = l - i;
//         if (k > 0) {
//           if (m > 0 && arr[l][m] === "O" && arr[l][m - 1] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (l + k < 5 && arr[l][m] === "O" && arr[l + 1][m] === "P") {
//             ans = false;
//             return ans;
//           }

//           if (m + 1 < 5 && arr[l][m] === "O" && arr[l][m + 1] === "P") {
//             ans = false;
//             return ans;
//           }
//         } else {
//           if (m > 0 && arr[l][m] === "O" && arr[l][m - 1] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (l > 0 && arr[l][m] === "O" && arr[l - 1][m] === "P") {
//             ans = false;
//             return ans;
//           }
//           if (m + 1 < 5 && arr[l][m] === "O" && arr[l][m + 1] === "P") {
//             ans = false;
//             return ans;
//           }
//         }
//       }
//       return ans;
//     }

//     let ans = 1;
//     for (let i = 0; i < 5; i++) {
//       for (let j = 0; j < 5; j++) {
//         if (arr[i][j] === "P") {
//           if (i < 4 && !subcheck([i, j], [i + 1, j])) {
//             ans = 0;
//             break;
//           }
//           // console.log(i,j,ans)
//           if (i > 0 && !subcheck([i, j], [i - 1, j])) {
//             ans = 0;
//             break;
//           }
//           // console.log(i,j,ans)
//           if (j < 4 && !subcheck([i, j], [i, j + 1])) {
//             ans = 0;
//             break;
//           }
//           // console.log(i,j,ans)
//           if (j > 0 && !subcheck([i, j], [i, j - 1])) {
//             ans = 0;
//             break;
//           }
//           // console.log(i,j,ans)
//         }
//       }
//       if (ans === 0) {
//         break;
//       }
//     }
//     return ans;
//   }

//   let ans = [];

//   for (let i of places) {
//     ans.push(check(i));
//   }

//   return ans;
// }
