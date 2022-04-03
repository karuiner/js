//징검다리 건너기

// 풀이 완료
// 질문하기의 힌트처럼 이분 탐색을 활용
function solution(stones, k) {
  let ans = 0,
    min = Infinity,
    max = 0;
  for (let i of stones) {
    if (i < min) {
      min = i;
    }
    if (i > max) {
      max = i;
    }
  }
  function move(n) {
    let ans = true,
      c = 0;
    for (let i of stones) {
      if (i <= n) {
        c++;
      } else {
        c = 0;
      }
      if (c >= k) {
        ans = false;
        break;
      }
    }
    return ans;
  }
  while (min < max) {
    let m = Math.floor((min + max) / 2);
    if (move(m)) {
      min = m + 1;
    } else {
      max = m;
    }
  }
  return min;
}
let stones = [2, 4, 5, 3, 2, 1, 4, 2, 5, 1],
  k = 3,
  expected_result = 3;

console.log(
  `calculated_result : ${solution(
    stones,
    k
  )}, expected_result : ${expected_result} `
);
// 시도 1
// function solution(stones, k) {
//     let ans = Infinity, l=stones.length;
//     for (let i=0; i <l-(k-1);i++){
//         let max=Math.max(...stones.slice(i,i+k))
//         if (max <ans){
//             ans=max
//         }
//     }
//     return ans;
// }
