//저주의 숫자 3
function solution(n) {
  function f(n) {
    let ans = 0,
      i = 0;
    while (ans < n) {
      i++;
      let s = `${i}`;
      if (i % 3 !== 0 && s.indexOf("3") === -1) {
        ans++;
      }
    }

    return i;
  }

  return f(n);
}
