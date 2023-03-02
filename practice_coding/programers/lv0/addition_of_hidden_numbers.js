//숨어있는 숫자의 덧셈
function solution(my_string) {
  let ans = 0,
    num = "";
  for (let i of my_string) {
    if (isNaN(i)) {
      if (num.length > 0) {
        ans += Number(num);
        num = "";
      }
    } else {
      num += i;
    }
  }
  if (num.length > 0) {
    ans += Number(num);
  }
  return ans;
}
