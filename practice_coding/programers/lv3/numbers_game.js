// 숫자 게임

// 풀이 완료
function solution(A, B) {
  let ans = 0,
    i = 0,
    j = 0,
    n = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  if (A[0] > B[n - 1]) {
    return ans;
  }
  while (i < n && j < n) {
    if (A[i] < B[j]) {
      ans++;
      i++;
      j++;
    } else {
      j++;
    }
  }
  return ans;
}
let values = [
  [[5, 1, 3, 7], [2, 2, 6, 8], 3],
  [[2, 2, 2, 2], [1, 1, 1, 1], 0],
];

for (let [A, B, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      A,
      B
    )}, expected_result : ${expected_result} `
  );
}

// 풀이 시도 1
// function solution(A, B) {
//     let ans=0, n=B.length

//     B.sort((a,b)=>a-b)
//     for (let i of A){
//         let k=-1
//         for (let j =0;j <n;j++ ){
//             if (B[j]>i){
//                 k=j
//                 ans++
//                 break
//             }
//         }
//         if (k >0){
//             B=[...B.slice(0,k),...B.slice(k+1)]
//         }else{
//             B=[...B.slice(1)]
//         }
//         n--
//     }

//     return ans;
// }
