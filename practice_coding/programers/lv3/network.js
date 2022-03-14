//네트워크
function solution(n, computers) {
  let ans = 0,
    dp = Array(n).fill(true),
    db = {};
  function move(s) {
    dp[s] = false;
    let v = computers[s],
      target = [];
    for (let i = 0; i < n; i++) {
      if (v[i] === 1 && dp[i]) {
        move(i);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (dp[i]) {
      move(i);
      ans++;
    }
  }

  return ans;
}
let values = [
  [
    3,
    [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 1],
    ],
    2,
  ],
  [
    3,
    [
      [1, 1, 0],
      [1, 1, 1],
      [0, 1, 1],
    ],
    1,
  ],
];

for (let [n, computers, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      n,
      computers
    )}, expected_result : ${expected_result} `
  );
}
