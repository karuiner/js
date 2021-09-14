function solution(numbers) {
  var answer = 45;
  for (let i of numbers) {
    answer -= i;
  }
  return answer;
}
let numbers = [1, 2, 3, 4, 6, 7, 8, 0];
console.log(solution(numbers)); //14
