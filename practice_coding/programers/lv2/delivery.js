// 배달
function solution(N, road, K) {
  let db = {},
    dp = [];
  for (let i = 1; i <= N; i++) {
    db[i] = {};
    dp[i - 1] = Infinity;
  }
  for (let [i, j, v] of road) {
    if (db[i][j] === undefined) {
      db[i][j] = v;
    } else if (db[i][j] > v) {
      db[i][j] = v;
    }

    if (db[j][i] === undefined) {
      db[j][i] = v;
    } else if (db[j][i] > v) {
      db[j][i] = v;
    }
  }
  dp[0] = 0;
  function count(s) {
    let p = db[s];
    for (let j in p) {
      let k = p[j] + dp[s - 1];
      if (dp[Number(j) - 1] === Infinity || dp[Number(j) - 1] > k) {
        dp[Number(j) - 1] = k;
        count(Number(j));
      }
    }
  }
  count(1);
  let ans = 0;
  for (let i of dp) {
    if (i <= K) {
      ans++;
    }
  }

  return ans;
}

let values = [
  [
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3,
    4,
  ],
  [
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4,
    4,
  ],
];

for (let [N, road, K, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      N,
      road,
      K
    )}, expected_result : ${expected_result} `
  );
}
