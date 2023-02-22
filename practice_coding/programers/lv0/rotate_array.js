//배열 회전시키기
function solution(numbers, direction) {
  let n = numbers.length;
  if (direction === "left") {
    return [...numbers.slice(1), numbers[0]];
  } else {
    return [numbers[n - 1], ...numbers.slice(0, n - 1)];
  }
}
