//덧칠하기
// 풀이 방식
// 칠을 해야하는 가장 작은 위치 에서부터
// 롤의 길이만큼 제하면서
// 횟수를 카운팅. 하면 풀이가 마무리 된다.

function solution(n, m, section) {
  let ans = 0,
    k = 1,
    i = 0;
  while (k <= n && section[i]) {
    if (k < section[i]) {
      k++;
    } else if (k === section[i]) {
      ans++;
      k += m;
      i++;
    } else {
      i++;
    }
  }
  return ans;
}
