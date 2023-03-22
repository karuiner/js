//분수의 덧셈
function solution(numer1, denom1, numer2, denom2) {
  let d = denom1 * denom2,
    u = numer1 * denom2 + numer2 * denom1;
  function f(n) {
    let ans = [],
      check = true;
    function f2(n) {
      if (n < 2) {
        return n;
      }
      let h = Math.floor(Math.sqrt(n)),
        ans = 1;
      for (let i = 2; i <= h; i++) {
        if (n % i === 0) {
          ans = i;
          break;
        }
      }
      return ans;
    }

    while (check) {
      let k = f2(n);
      if (k === 1 || k === n) {
        ans.push(n);
        check = false;
      } else {
        ans.push(k);
        n = n / k;
      }
    }
    return ans;
  }
  let p = f(d);

  for (let i of p) {
    if (u % i === 0 && d % i === 0) {
      d /= i;
      u /= i;
    }
  }

  return [u, d];
}
