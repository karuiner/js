//가장 큰 정사각형 찾기

// 풀이 시도 1
function solution(board) {
  let ans = 0,
    arr = [],
    m = board.length,
    n = board[0].length;

  function f(i, j, s) {
    if (j + 1 >= n || i + 1 >= m) {
      return s;
    }
    let check = true;

    for (let a = i - s; a <= i + 1; a++) {
      if (!board[a][j + 1]) {
        check = false;
        break;
      }
    }
    if (check) {
      for (let b = j - s; b < j + 1; b++) {
        if (!board[i][b]) {
          check = false;
          break;
        }
      }
    }
    if (check) {
      return f(i + 1, j + 1, s + 1);
    } else {
      return s;
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let k = f(i, j, 0);
      let x = (k + 1) ** 2;
      if (ans < x) {
        ans = x;
      }
    }
  }

  return ans;
}

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
