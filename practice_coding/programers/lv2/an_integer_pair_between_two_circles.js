//두 원 사이의 정수 쌍
// 원의 4분면중 하나의 분면만 카운팅한뒤 4배를 한다.

function solution(r1, r2) {
  let ans = 0;
  for (let i = 1; i <= r2; i++) {
    let k = Math.ceil(Math.sqrt(r1 ** 2 - i ** 2));
    if (r1 < i) {
      k = 0;
    }
    let k2 = Math.floor(Math.sqrt(r2 ** 2 - i ** 2));
    ans += k2 - k + 1;
  }
  return ans * 4;
}
