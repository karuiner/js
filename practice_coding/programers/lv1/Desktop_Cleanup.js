// 바탕화면 정리
// 풀이 방법
// 한번의 드래그로 정리할수 있는 최소의 크기를 찾는것 이므로
// 파일이 존재하는 가작은은 높이 와 가장큰 높이 가장 작은 길이와 가장 큰 길이를
// 구하면 된다.
// 초기값으로 시작점은 최대 끝점으로 끝점은 0,0 으로 정의한다.
// 주어진 배열을 순차적으로 수행하면서
// 시작점은 파일이 존재하는 위치중 가장 작은 값들로
// 끝점은 가장 큰 값으로 구한뒤
// 결과에 맞게 배열로 정리하여 내보내면
// 문제풀이 마무리다.

function solution(wallpaper) {
  let m = wallpaper.length,
    n = wallpaper[0].length;
  let [x1, y1, x2, y2] = [n, m, 0, 0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let k = wallpaper[i][j];
      if (k === "#") {
        if (i < y1) {
          y1 = i;
        }
        if (j < x1) {
          x1 = j;
        }
        if (i > y2) {
          y2 = i;
        }
        if (j > x2) {
          x2 = j;
        }
      }
    }
  }

  return [y1, x1, y2 + 1, x2 + 1];
}
