//성격 유형 검사하기
function solution(survey, choices) {
  var answer = "",
    db = { A: 0, C: 0, R: 0, T: 0, F: 0, J: 0, M: 0, N: 0 };
  let n = survey.length;
  for (let i = 0; i < n; i++) {
    let p = survey[i];
    let v = choices[i] - 4;
    let k = p[1];
    if (v < 0) {
      k = p[0];
      v = -v;
    }
    db[k] += v;
  }
  function f(ans, a, b) {
    if (db[a] === db[b] || db[a] > db[b]) {
      ans += a;
    } else {
      ans += b;
    }
    return ans;
  }
  let ans = "";
  ans = f(ans, "R", "T");
  ans = f(ans, "C", "F");
  ans = f(ans, "J", "M");
  ans = f(ans, "A", "N");

  return ans;
}
