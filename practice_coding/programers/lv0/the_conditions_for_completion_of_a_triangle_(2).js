//삼각형의 완성조건 (2)

function solution(sides) {
  function countMx(mid, limit) {
    return limit - mid - 1;
  }
  function countMid(min, max) {
    return max - (max - min);
  }
  let [a, b] = sides;
  if (a > b) {
    [a, b] = [b, a];
  }
  return countMx(b, a + b) + countMid(a, b);
}
