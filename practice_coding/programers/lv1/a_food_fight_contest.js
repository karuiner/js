//푸드 파이트 대회

//풀이 완료
function solution(food) {
  let ans = "0",
    n = food.length,
    p = 1;
  for (let i = n - 1; i > 0; i--) {
    let k = food[i];
    let h = Math.floor(k / 2);
    p += h;
    ans = ans.padStart(p, i);
    p += h;
    ans = ans.padEnd(p, i);
  }
  return ans;
}
