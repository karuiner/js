//합성수 찾기
function solution(n) {
  function isPrime(n) {
    if (n < 2) return false;
    let ans = true;
    let h = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= h; i++) {
      if (n % i === 0) {
        ans = false;
        break;
      }
    }

    return ans;
  }
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (i > 1 && !isPrime(i)) {
      ans++;
    }
  }

  return ans;
}
