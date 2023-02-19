//직사각형 넓이 구하기
function solution(dots) {
  let [x0, y0] = dots[0];
  let x = 0,
    y = 0;
  for (let [i, j] of dots) {
    if (i === x0) {
      x = j - x;
    }
    if (j === y0) {
      y = i - y;
    }
  }
  let ans = 0;
  if (x === 0 || y === 0) {
    ans = Math.abs(x) + Math.abs(y);
  } else {
    ans = Math.abs(x) * Math.abs(y);
  }

  return ans;
}
