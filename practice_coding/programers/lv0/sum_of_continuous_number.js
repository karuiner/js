//연속된 수의 합

function solution(num, total) {
  var answer = [];
  //a ~ a + n-1  n*a + 0.5* n-1(n) = t
  let a = total / num - 0.5 * (num - 1);
  for (let i = 0; i < num; i++) {
    answer[i] = a + i;
  }
  return answer;
}
