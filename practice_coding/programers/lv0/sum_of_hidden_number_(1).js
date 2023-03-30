//숨어있는 숫자의 덧셈 (1)
function solution(my_string) {
  let ans = 0;
  for (let i of my_string) {
    let k = Number(i);
    if (!Number.isNaN(k)) {
      ans += k;
    }
  }
  return ans;
}
