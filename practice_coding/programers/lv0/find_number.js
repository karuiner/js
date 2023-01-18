//숫자 찾기
function solution(num, k) {
  let s = `${num}`,
    l = s.length,
    ans = -1;
  k = `${k}`;
  for (let i = 0; i < l; i++) {
    if (s[i] === k) {
      ans = i + 1;
      break;
    }
  }
  return ans;
}
