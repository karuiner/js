function solution(n, edge) {
  let db = {};
  for (let [i, j] of edge) {
    if (db[i] === undefined) {
      db[i] = {};
    }
    db[i][j] = true;

    if (db[j] === undefined) {
      db[j] = {};
    }
    db[j][i] = true;
  }
  let arr = Array(n).fill(Infinity),
    max = [0, 0];

  function path(cl, c) {
    let ncl = {},
      k = 0;
    for (let i in cl) {
      if (c < arr[Number(i) - 1]) {
        arr[Number(i) - 1] = c;
        if (c > max[0]) {
          max = [c, 1];
        } else if (c === max[0]) {
          max[1]++;
        }
      }

      for (let j in db[i]) {
        if (arr[Number(j) - 1] === Infinity && ncl[j] === undefined) {
          ncl[j] = true;
          k++;
        }
      }
    }
    if (k > 0) {
      path({ ...ncl }, c + 1);
    }
  }
  path({ 1: true }, 0);
  return max[1];
}
let n = 6,
  edge = [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ],
  expected_result = 3;
console.log(
  `calculated_result : ${solution(
    n,
    edge
  )}, expected_result : ${expected_result} `
);
