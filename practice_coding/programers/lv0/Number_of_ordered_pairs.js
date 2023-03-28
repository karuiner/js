// 순서쌍의 갯수
function solution(n) {
  let h = Math.floor(Math.sqrt(n)),
    ans = 0;
  for (let i = 1; i <= h; i++) {
    let k = n / i;
    if (n % i === 0) {
      if (i === k) {
        ans++;
      } else {
        ans += 2;
      }
    }
  }

  return ans;
}
