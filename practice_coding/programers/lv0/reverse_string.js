//문자열 뒤집기
function solution(my_string) {
  let ans = "",
    n = my_string.length;
  for (let i = n - 1; i >= 0; i--) {
    ans += my_string[i];
  }

  return ans;
}
