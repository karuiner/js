//공 던지기
function solution(numbers, k) {
  let n = numbers.length,
    u = 0;
  while (k > 1) {
    u += 2;
    k--;
  }

  return numbers[u % n];
}
