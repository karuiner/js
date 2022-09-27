//땅따먹기

// 풀이 시도 2 - 고민중
function solution(land) {
  let ans = 0,
    n = land.length,
    m = land[0].length,
    sub = [];
  let dummy = [];
  for (let i = 0; i < 4; i++) {
    dummy[i] = [];
    for (let j = 0; j < 4; j++) {
      dummy[i][j] = 0;
    }
  }
  for (let i = 0; i < n; i++) {
    let dummy = [];
    for (let i = 0; i < 4; i++) {
      dummy[i] = [];
      for (let j = 0; j < 4; j++) {
        dummy[i][j] = 0;
      }
    }
    sub[i] = dummy;
  }

  function f(from, idx) {
    console.log(from, idx);
    if (idx === n) {
      console.log(sub[n - 1]);
      return 0;
    }

    for (let i = 0; i < 4; i++) {
      if (from !== i) {
        if (idx > 0) {
          let max = Math.max(...sub[idx][from]);
          sub[idx][i][from] = max + land[idx][i];
        } else {
          for (let j = 0; j < 4; j++) {
            sub[idx][i][j] = land[idx][i];
          }
        }
      }
      f(i, idx + 1);
    }
  }
  f(-1, 0);
  return 0;
}

//풀이 시도 1
// 현재시점에서 가장 크게되는 결과로(탐욕법?) - 문제에서 주어진 보기 예문을 제외한 모든 예문 풀이실패

function solution(land) {
  let ans = 0,
    n = land.length,
    m = land[0].length;
  function f(idx, j, s) {
    let ans = 0;
    if (idx < n) {
      let k = -1,
        nj = -1;
      for (let i = 0; i < m; i++) {
        if (i !== j) {
          if (k < land[idx][i]) {
            nj = i;
            k = land[idx][i];
          }
        }
      }
      return f(idx + 1, nj, s + k);
    } else {
      return s;
    }
  }

  return f(0, -1, 0);
}

// 완전 탐색 - 모든 예제에서 시간초과
function solution(land) {
  let ans = 0,
    n = land.length,
    m = land[0].length;
  function f(idx, j, s) {
    let ans = 0;
    for (let i = 0; i < m; i++) {
      if (i !== j) {
        let k = s + land[idx][i];
        if (idx + 1 < n) {
          k = f(idx + 1, i, k);
        }
        if (k > ans) {
          ans = k;
        }
      }
    }
    return ans;
  }

  return f(0, -1, 0);
}
