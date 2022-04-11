//멀리뛰기

//풀이 완료
function solution(n) {
  let dp = Array(n + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567; //orverflow problem 추측 이라는
  }
  let ans = dp[n];
  return ans;
}
let values = [
  [4, 5],
  [3, 3],
];
for (let [n, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(n)}, expected_result : ${expected_result} `
  );
}
//시도 1
// function solution(n) {
//   let dp = Array(n + 1).fill(-1);

//   function f(n) {
//     let ans = 0;
//     if (n === 1) {
//       dp[n] = 1;
//       return 1;
//     } else if (n === 0) {
//       dp[n] = 0;
//       return 0;
//     } else if (n === 2) {
//       dp[n] = 2;
//       return 2;
//     } else {
//       let a = 0,
//         b = 0;
//       if (dp[n - 1] === -1) {
//         a = f(n - 1);
//       } else {
//         a = dp[n - 1];
//       }
//       if (dp[n - 2] === -1) {
//         b = f(n - 2);
//       } else {
//         b = dp[n - 2];
//       }

//       if (dp[n] === -1) {
//         ans = a + b;
//         dp[n] === ans;
//       } else {
//         ans = dp[n];
//       }
//     }
//     return ans;
//   }
//   let ans = f(n);
//   return ans % 1234567;
// }
