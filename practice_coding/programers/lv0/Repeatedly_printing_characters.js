//문자 반복 출력하기
function solution(my_string, n) {
  let ans = "",
    k = 0;
  for (let i of my_string) {
    ans = ans.padEnd(k + n, i);
    k += n;
  }
  return ans;
}
