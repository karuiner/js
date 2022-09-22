//예상 대진표

//풀이 완료
function solution(n, a, b) {
  let max = n.toString(2).length - 1;
  if (b < a) {
    [a, b] = [b, a];
  }
  let hn = n / 2,
    c = hn;
  function check(hn) {
    return a <= hn && b > hn;
  }
  while (max > 1 && !check(c)) {
    hn /= 2;
    max -= 1;
    if (b <= c) {
      c -= hn;
    } else if (a > c) {
      c += hn;
    }
  }

  return max;
}
