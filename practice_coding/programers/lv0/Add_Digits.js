// 자릿수 더하기

function solution(n) {
  let ans = 0;
  let s = `${n}`;
  for (let i of s) {
    ans += Number(i);
  }
  return ans;
}
