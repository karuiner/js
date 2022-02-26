function solution(k, dungeons) {
  let n = dungeons.length,
    indexs = Array(n).fill(true);
  let min = dungeons.reduce((acc, x) => (acc < x[0] ? acc : x[0]), 1000);
  function f(indexs, k, c) {
    let q = indexs.reduce((acc, x) => acc + x, 0);
    if (k < min || q === 0) {
      return c;
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
      if (indexs[i] && k >= dungeons[i][0]) {
        let sindex = [...indexs];
        sindex[i] = false;
        let sub = f(sindex, k - dungeons[i][1], c + 1);
        ans = Math.max(ans, sub);
      }
    }
    return ans;
  }
  return f(indexs, k, 0);
}
let k = 80,
  dungeons = [
    [80, 20],
    [50, 40],
    [30, 10],
  ],
  expected_result = 3;
console.log(
  `calculated_result : ${solution(
    k,
    dungeons
  )}, expected_result : ${expected_result} `
);
