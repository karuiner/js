// 빛의 경로 사이클

// 풀이 시도 1
function solution(grid) {
  let n = grid.length,
    m = grid[0].length,
    check = [],
    sp = {};
  for (let i = 0; i < n; i++) {
    check[i] = [];
    for (let j = 0; j < m; j++) {
      check[i][j] = { N: true, S: true, W: true, E: true };
    }
  }

  function move(i, j, d, s) {
    if (!check[i][j][d]) {
      return s;
    } else {
      check[i][j][d] = false;
    }

    function nextPosition(d) {
      let [x, y] = [i, j];
      if (d === "N") {
        x = i > 0 ? x - 1 : n - 1;
      }
      if (d === "S") {
        x = i < n - 1 ? x + 1 : 0;
      }
      if (d === "E") {
        y = j > 0 ? y - 1 : m - 1;
      }
      if (d === "W") {
        y = j < m - 1 ? y + 1 : 0;
      }
      return [x, y];
    }

    let [ni, nj] = nextPosition(d);
    function nextDirection(d, sd) {
      let db = {
        N: { S: "N", L: "W", R: "E" },
        S: { S: "S", L: "E", R: "W" },
        E: { S: "E", L: "N", R: "S" },
        W: { S: "W", L: "S", R: "N" },
      };
      return db[d][sd];
    }

    let nd = nextDirection(d, grid[ni][nj]);
    let x = move(ni, nj, nd, s + 1);
    return x;
  }

  let ans = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      for (let d of ["S", "N", "W", "E"]) {
        if (check[i][j][d]) {
          let x = move(i, j, d, 0);
          ans.push(x);
        }
      }
    }
  }
  ans.sort((a, b) => a - b);

  return ans;
}

// 풀이중
function solution(grid) {
  let n = grid.length,
    m = grid[0].length,
    check = [],
    sp = {};
  for (let i = 0; i < n; i++) {
    check[i] = [];
    for (let j = 0; j < m; j++) {
      check[i][j] = { N: true, S: true, W: true, E: true };
    }
  }

  function move(i, j, d, s) {
    if (!check[i][j][d]) {
      return s;
    } else {
      check[i][j][d] = false;
    }

    function nextPosition(d) {
      let [x, y] = [i, j];
      if (d === "N") {
        x = i > 0 ? x - 1 : n - 1;
      }
      if (d === "S") {
        x = i < n - 1 ? x + 1 : 0;
      }
      if (d === "E") {
        y = j > 0 ? y - 1 : m - 1;
      }
      if (d === "W") {
        y = j < m - 1 ? y + 1 : 0;
      }
      return [x, y];
    }

    let [ni, nj] = nextPosition(d);
    function nextDirection(d, sd) {
      let db = {
        N: { S: "N", L: "W", R: "E" },
        S: { S: "S", L: "E", R: "W" },
        E: { S: "E", L: "N", R: "S" },
        W: { S: "W", L: "S", R: "N" },
      };
      return db[d][sd];
    }

    let nd = nextDirection(d, grid[ni][nj]);
    let x = move(ni, nj, nd, s + 1);
    return x;
  }

  let c = 0,
    i = 0,
    j = 0,
    d = "S",
    ss = 0,
    ans = [];

  function find(i, j, d) {
    let ori = [i, j, d];
    for (let k in check[i][j]) {
      if (check[i][j][k]) {
        return [i, j, k];
      }
    }

    if (j < m - 1) {
      j++;
    } else {
      i++;
      j = 0;
    }
    for (let k in check[i][j]) {
      if (check[i][j][k]) {
        return [i, j, k];
      }
    }
    return ori;
  }

  while (ss < m * n * 4) {
    let x = move(i, j, d, 0);
    ans.push(x);
    ss += x;
    try {
      [i, j, d] = find(i, j, d);
    } catch {
      break;
    }
  }

  return ans;
}
