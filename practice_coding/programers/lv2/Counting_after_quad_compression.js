//쿼드압축 후 개수 세기
function solution(arr) {
  function f(arr) {
    let n = arr.length,
      ans = [0, 0];
    if (n > 2) {
      let hn = n / 2,
        sub = [0, 0],
        k = [0, 0];
      sub = f(arr.map((x) => x.slice(0, hn)).slice(0, hn));
      k[0] += sub[0];
      k[1] += sub[1];

      sub = f(arr.map((x) => x.slice(hn, n)).slice(0, hn));
      k[0] += sub[0];
      k[1] += sub[1];
      sub = f(arr.map((x) => x.slice(0, hn)).slice(hn, n));
      k[0] += sub[0];
      k[1] += sub[1];
      sub = f(arr.map((x) => x.slice(hn, n)).slice(hn, n));
      k[0] += sub[0];
      k[1] += sub[1];

      if (k[0] === 4 && k[1] === 0) {
        ans[0]++;
      } else if (k[1] === 4 && k[0] === 0) {
        ans[1]++;
      } else {
        ans = [...k];
      }
    } else {
      let k = 0;
      for (let i of arr) {
        for (let j of i) {
          k += j;
        }
      }
      if (k === 4) {
        ans[1]++;
      } else if (k > 0) {
        ans[0] += n ** 2 - k;
        ans[1] += k;
      } else {
        ans[0]++;
      }
    }
    return ans;
  }

  return f(arr);
}
let values = [
  [
    [
      [1, 1, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 0, 1],
      [1, 1, 1, 1],
    ],
    [4, 9],
  ],
  [
    [
      [1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 1, 0, 0, 1],
      [0, 0, 0, 0, 1, 1, 1, 1],
    ],
    [10, 15],
  ],
];
for (let [arr, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      arr
    )}, expected_result : ${expected_result} `
  );
}
