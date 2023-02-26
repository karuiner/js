//점의 위치 구하기
function solution(dot) {
  let [x, y] = dot;
  if (x * y > 0) {
    return x > 0 ? 1 : 3;
  } else {
    return x > 0 ? 4 : 2;
  }
}
