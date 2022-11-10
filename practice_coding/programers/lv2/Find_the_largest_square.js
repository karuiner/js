//가장 큰 정사각형 찾기

//풀이시도 중
function solution(board) {
  let ans = 0,
    arr = [],
    n = board.length,
    m = board[0].length;

  function f(i, j) {
    let i1 = i + 1,
      j1 = j + 1;
    if (board[i][j]) {
      l;
    } else {
      return 0;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let k = f(i, j, 1);
      if (k === 9) {
        arr.push([i, j]);
        if (ans < k) {
          ans = k;
        }
      }
    }
  }

  return ans;
}
