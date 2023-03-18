//배열의 평균값
function solution(numbers) {
  let n = numbers.length,
    sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  let k = sum / n;

  return k;
}
