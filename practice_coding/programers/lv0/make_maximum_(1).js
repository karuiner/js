//최대값 만들기(1)
function solution(numbers) {
  let a = 0,
    b = 0;
  for (let i of numbers) {
    if (i > a) {
      b = a;
      a = i;
    } else if (i > b) {
      b = i;
    }
  }
  return a * b;
}
