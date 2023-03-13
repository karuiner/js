//중앙값 구하기
function solution(array) {
  array.sort((a, b) => a - b);
  let l = array.length,
    h = (l - 1) / 2;
  return array[h];
}
