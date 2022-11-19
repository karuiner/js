//기사단원의 무기

//풀이 완료
function solution(number, limit, power) {
  function f(x) {
    if (x <= 2) {
      return x;
    }

    let h = Math.floor(Math.sqrt(x)),
      ans = 2;
    for (let i = 2; i <= h; i++) {
      if (x % i === 0) {
        ans++;
        if (x / i !== i) {
          ans++;
        }
      }
    }
    return ans;
  }
  let ans = 0;
  for (let i = 1; i <= number; i++) {
    let u = f(i);

    if (u > limit) {
      u = power;
    }
    ans += u;
  }

  return ans;
}
