//뒤에 있는 큰 수 찾기

// 풀이 시도 1 실패
// 긴 예제의경우 시간 초과 가 생김
// 계산 단축 방법을 고민할것

function solution(numbers) {
  let ans = [],
    n = numbers.length;
  for (let i = 0; i < n; i++) {
    let k = numbers[i],
      sub = -1;
    for (let j = i + 1; j < n; j++) {
      if (numbers[j] > k) {
        sub = numbers[j];
        break;
      }
    }
    ans[i] = sub;
  }

  return ans;
}
