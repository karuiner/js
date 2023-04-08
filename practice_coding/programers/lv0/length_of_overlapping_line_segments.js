//겹치는 선분의 길이
function solution(lines) {
  function ocu(a, b) {
    let ans = 0;
    let [x1, y1] = a,
      [x2, y2] = b;
    //안겹치는 케이스
    // y1 < x2
    // y2 < x1
    if (y1 <= x2 || y2 <= x1) {
      return ans;
    } else {
      let mX = Math.max(x1, x2),
        mY = Math.min(y1, y2);
      ans = mY - mX;
      return ans;
    }
  }
  function ocu2(a, b, c) {
    let ans = 0;
    let [x1, y1] = a,
      [x2, y2] = b,
      [x3, y3] = c;
    let mX = Math.max(x1, x2, x3),
      mY = Math.min(y1, y2, y3);
    if (mY > mX) {
      ans = mY - mX;
    }
    return ans;
  }

  let [a, b, c] = lines;

  // 1과 2가 겹치는  영역 확인
  let r1 = ocu(a, b);
  // 2와 3이 겹치는 영역 확인
  let r2 = ocu(b, c);
  // 1과 3이  겹치는 영역 확인
  let r3 = ocu(a, c);
  // 공통적으로 겹치는 영역 확인
  let r4 = ocu2(a, b, c);
  return r1 + r2 + r3 - 2 * r4;
}
