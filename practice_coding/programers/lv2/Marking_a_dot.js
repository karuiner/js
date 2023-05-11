//점 찍기
// 원 내부에 정수 점들을 찾는것이므로
// 주어진 조건하에서 구할수 있는 한축의 점의 갯수를 구한다.
// 그리고 해당 축에서 셀수있는 점의갯수를 구한다.
// 이를 더한다.
// 총합이 문제의 답이다.

function solution(k, d) {
  let ans = 0;
  for (let i = 0; i < Math.floor(d / k) + 1; i++) {
    let y = Math.floor(Math.sqrt(d ** 2 - (i * k) ** 2));
    y = Math.floor(y / k) + 1;
    ans += y;
  }

  return ans;
}
