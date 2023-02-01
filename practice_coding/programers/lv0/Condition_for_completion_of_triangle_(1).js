//삼각형의 완성조건 (1)
function solution(sides) {
  let s = 0,
    max = 0;
  for (let i of sides) {
    s += i;
    if (i > max) {
      max = i;
    }
  }

  return s / max > 2 ? 1 : 2;
}
