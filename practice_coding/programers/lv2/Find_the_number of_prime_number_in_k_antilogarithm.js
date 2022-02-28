//k진수에서 소수 개수 구하기
function solution(n, k) {
  let s = n.toString(k).split("0");
  function get(n) {
    if (n < 2) {
      return false;
    }
    let ans = true;
    let k = Math.floor(Math.sqrt(n));
    for (let i = 2; i <= k; i++) {
      if (n % i === 0) {
        ans = false;
        break;
      }
    }

    return ans;
  }
  let ans = 0;
  for (let i of s) {
    let k = get(Number(i));
    if (k) {
      ans++;
    }
  }

  return ans;
}
