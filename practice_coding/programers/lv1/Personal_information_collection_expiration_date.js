//개인정보 수집 유효기간
function solution(today, terms, privacies) {
  let ans = [],
    db = {};

  function cal(f, f1, p) {
    let [y, m, d] = f.split(".").map(Number),
      [y1, m1, d1] = f1.split(".").map(Number);
    let a = y - y1,
      b = m - m1,
      c = d - d1;
    return (a * 12 + b - p) * 28 + c >= 0;
  }
  for (let i of terms) {
    let [a, b] = i.split(" ");
    db[a] = Number(b);
  }

  for (let i = 0; i < privacies.length; i++) {
    let z = privacies[i];
    let [d, t] = z.split(" ");
    if (cal(today, d, db[t])) {
      ans.push(i + 1);
    }
  }

  return ans;
}
