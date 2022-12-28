//크기가 작은 부분문자열

function solution(t, p) {
  let ans = 0,
    a = t.length,
    b = p.length;
  for (let i = 0; i <= a - b; i++) {
    let s = t.slice(i, i + b);
    if (s <= p) {
      ans++;
    }
  }

  return ans;
}
