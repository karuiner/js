//콜라 문제

// 풀이 완료
function solution(a, b, n) {
  let ans = 0;
  while (n > a - 1) {
    let k = Math.floor(n / a);
    let c = n % a;
    n = k * b;
    ans += n;
    n += c;
  }

  return ans;
}
