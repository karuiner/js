// 짝수 홀수 개수
function solution(num_list) {
  let ans = [0, 0];
  for (let i of num_list) {
    let idx = i % 2;
    ans[idx]++;
  }

  return ans;
}
