//거리두기 확인하기
// 풀이 완료

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
