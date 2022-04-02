//길 찾기 게임
function solution(nodeinfo) {
  let n = nodeinfo.length,
    db = {},
    dp = [],
    level = [],
    mnx = Infinity,
    mxx = 0;
  for (let i = 0; i < n; i++) {
    let [x, y] = nodeinfo[i];
    dp[i] = i;
    if (db[y] === undefined) {
      db[y] = [];
      level.push(y);
    }
    db[y].push([x, y, i]);
    if (x > mxx) {
      mxx = x;
    }
    if (x < mnx) {
      mnx = x;
    }
  }
  level.sort((a, b) => b - a);
  function f(l, mnx, mxx) {
    let ans = [],
      lsub = [[], []],
      rsub = [[], []];
    if (level[l] !== undefined) {
      let arr = db[level[l]].filter(([x, y, i]) => x >= mnx && x <= mxx)[0];
      let [x, y, i] = arr;
      if (level[l + 1] !== undefined) {
        let left = db[level[l + 1]].filter(
          ([x1, y1, i1]) => x1 >= mnx && x1 <= x
        )[0];
        let right = db[level[l + 1]].filter(
          ([x1, y1, i1]) => x1 >= x && x1 <= mxx
        )[0];

        if (left !== undefined) {
          dp[left[2]] = i;
          lsub = f(l + 1, mnx, x);
        }
        if (right !== undefined) {
          dp[right[2]] = i;
          rsub = f(l + 1, x, mxx);
        }
      }
      ans = [
        [i + 1, ...lsub[0], ...rsub[0]],
        [...lsub[1], ...rsub[1], i + 1],
      ];
    }

    return ans;
  }

  return f(0, mnx, mxx);
}
let nodeinfo = [
    [5, 3],
    [11, 5],
    [13, 3],
    [3, 5],
    [6, 1],
    [1, 3],
    [8, 6],
    [7, 2],
    [2, 2],
  ],
  expected_result = [
    [7, 4, 6, 9, 1, 8, 5, 2, 3],
    [9, 6, 5, 8, 1, 4, 3, 2, 7],
  ];
console.log(
  `calculated_result : ${solution(
    nodeinfo
  )}, expected_result : ${expected_result} `
);
