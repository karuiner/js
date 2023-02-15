//최대값 만들기 2
function solution(numbers) {
  let ans = -Infinity,
    n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      let k = numbers[i] * numbers[j];
      if (k > ans) {
        ans = k;
      }
    }
  }

  return ans;
}
