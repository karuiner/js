// n^2 배열 자르기
function solution(n, left, right) {
  var answer = [];
  for (let i = left; i <= right; i++) {
    let j = Math.floor(i / n),
      r = i % n;
    let s = r + 1 < j + 1 ? j + 1 : r + 1;
    answer.push(s);
  }

  return answer;
}
let n = 3,
  left = 2,
  right = 5,
  expected_result = [3, 2, 2, 3];

console.log(
  `calculated_result : ${solution(
    n,
    left,
    right
  )}, expected_result : ${expected_result} `
);
