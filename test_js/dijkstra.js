// 예제 참고 https://m.blog.naver.com/ndb796/221234424646
// graph에 사용할 데이터 와 다익스트라 알고리즘의 설명 참조 제시된 코드는 직접 적용하지 않음

function dijk(graph, s) {
  let dp = [],
    db = {};
  for (let [i, j, v] of graph) {
    if (dp[i - 1] === undefined) {
      dp[i - 1] = Infinity;
    }

    if (dp[j - 1] === undefined) {
      dp[j - 1] = Infinity;
    }
    if (db[i] === undefined) {
      db[i] = {};
    }
    if (db[i][j] === undefined) {
      db[i][j] = v;
    }
    if (db[j] === undefined) {
      db[j] = {};
    }
    if (db[j][i] === undefined) {
      db[j][i] = v;
    }
  }

  dp[s] = 0;
  let n = dp.length;

  let invite = Array(n).fill(false);
  invite[s] = true;
  function redo(s) {
    let min = Infinity,
      k = 0,
      q = dp[s - 1];

    for (let i in db[s]) {
      let y = db[s][i] + q;
      if (db[s][i] < min && !invite[Number(i) - 1]) {
        min = db[s][i];
        k = i;
      }
      if (y < dp[Number(i) - 1]) {
        dp[Number(i) - 1] = y;
      }
    }
    invite[Number(s) - 1] = true;
    if (min !== Infinity) {
      redo(k);
    }
  }
  redo(s + 1);
  console.log(dp, db, invite);
}

// A* 적용 해볼것
//http://www.gisdeveloper.co.kr/?p=3897
function dijk2(graph, s) {
  let dp = [],
    db = {};
  for (let [i, j, v] of graph) {
    if (dp[i - 1] === undefined) {
      dp[i - 1] = Infinity;
    }

    if (dp[j - 1] === undefined) {
      dp[j - 1] = Infinity;
    }
    if (db[i] === undefined) {
      db[i] = {};
    }
    if (db[i][j] === undefined) {
      db[i][j] = v;
    }
    if (db[j] === undefined) {
      db[j] = {};
    }
    if (db[j][i] === undefined) {
      db[j][i] = v;
    }
  }

  dp[s] = 0;
  let n = dp.length;

  let invite = Array(n).fill(false);
  invite[s] = true;
  function redo(s) {
    let min = Infinity,
      k = 0,
      q = dp[s - 1];

    for (let i in db[s]) {
      let y = db[s][i] + q;
      if (db[s][i] < min && !invite[Number(i) - 1]) {
        min = db[s][i];
        k = i;
      }
      if (y < dp[Number(i) - 1]) {
        dp[Number(i) - 1] = y;
      }
    }
    invite[Number(s) - 1] = true;
    if (min !== Infinity) {
      redo(k);
    }
  }
  redo(s + 1);
  console.log(dp, db, invite);
}
// let graph = [
//   [1, 2, 2],
//   [1, 4, 1],
//   [4, 2, 1],
//   [1, 3, 5],
//   [2, 3, 3],
//   [4, 3, 3],
//   [4, 5, 1],
//   [3, 5, 1],
//   [5, 6, 2],
//   [3, 6, 5],
// ];
let graph = [
  [1, 2, 1],
  [2, 6, 1],
  [6, 5, 1],
  [5, 9, 1],
  [3, 4, 1],
  [3, 7, 1],
  [8, 7, 1],
  [8, 12, 1],
  [12, 11, 1],
  [12, 16, 1],
  [11, 10, 1],
  [16, 15, 1],
  [15, 14, 1],
  [14, 13, 1],
  [13, 9, 1],
];

dijk(graph, 0);
