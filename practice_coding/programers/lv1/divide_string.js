//문자열 나누기
function solution(s) {
  let ans = 0,
    x = "",
    a = 0,
    b = 0,
    n = s.length,
    q = 0;
  for (let i = 0; i < n; i++) {
    let k = s[i];
    if (x === "") {
      x = k;
    }

    if (x === k) {
      a++;
    } else {
      b++;
    }
    if (a === b) {
      ans++;
      x = "";
      q = 0;
    } else {
      q++;
    }
  }

  return q === 0 ? ans : ans + 1;
}
