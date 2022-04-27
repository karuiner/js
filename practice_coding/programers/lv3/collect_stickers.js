// 스티커 수집

// 풀이 완료
function solution(sticker) {
  let n = sticker.length,
    dp = Array(n + 2).fill(0),
    dp2 = Array(n + 1).fill(0);
  //dp문제 뽑느냐 마느냐
  if (n === 1) {
    return sticker[0];
  }
  for (let i = 1; i < n; i++) {
    let a = dp[i],
      b = dp[i] + sticker[i];
    if (dp[i + 2] < b) {
      dp[i + 2] = b;
    }
    if (dp[i + 1] < a) {
      dp[i + 1] = a;
    }
    let a2 = dp2[i - 1],
      b2 = dp2[i - 1] + sticker[i - 1];
    if (dp2[i + 1] < b2) {
      dp2[i + 1] = b2;
    }
    if (dp2[i] < a2) {
      dp2[i] = a2;
    }
  }

  return Math.max(dp[n], dp[n + 1], dp2[n - 1], dp2[n]);
}
let values = [
  [[14, 6, 5, 11, 3, 9, 2, 10], 36],
  [[1, 3, 2, 5, 4], 8],
];
for (let [sticker, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      sticker
    )}, expected_result : ${expected_result} `
  );
}

// 시도 2 중복되는 구간 스킵
// function solution(sticker) {
//   let n = sticker.length,
//     db = {};
//   //dp문제 뽑느냐 마느냐

//   function f(s, e, k) {
//     if (s > e) {
//       return k;
//     }
//     if (db[`${s}-${e}`] === undefined) {
//       let ans = f(s + 2, e, k + sticker[s]);
//       let sub = f(s + 1, e, k);
//       ans = ans > sub ? ans : sub;
//       db[`${s}-${e}`] = ans - k;
//       return ans;
//     } else {
//       return k + db[`${s}-${e}`];
//     }
//   }
//   if (n === 1) {
//     return sticker[0];
//   }
//   let ans = f(0, n - 2, 0);
//   let sub = f(1, n - 1, 0);

//   return ans > sub ? ans : sub;
// }

// 시도 1 재귀 함수를 사용한 풀이.
// function solution(sticker) {
//     let n=sticker.length;
//     //dp문제 뽑느냐 마느냐

//     function f(s,e,k){
//         if (s >e){
//             return k
//         }
//         let ans=f(s+2,e,k+sticker[s])
//         let sub=f(s+1,e,k)

//         return ans>sub?ans:sub
//     }
//     if (n===1){
//         return sticker[0]
//     }
//     let ans=f(0,n-2,0)
//     let sub=f(1,n-1,0)

//     return ans>sub?ans:sub
// }
