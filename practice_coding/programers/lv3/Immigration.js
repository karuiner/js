// 입국 심사
function solution(n, times) {
  let l = times.length;
  let s = times.reduce((acc, x) => acc + x * Math.ceil(n / l), 0);
  let [max, min] = [s, 0];

  function f(t) {
    let ans = 0;
    for (let i of times) {
      ans += Math.floor(t / i);
    }
    return ans;
  }
  while (min < max) {
    let m = Math.floor((max + min) / 2);
    if (f(m) < n) {
      min = m + 1;
    } else {
      max = m;
    }
  }

  return min;
}

let n = 6,
  times = [7, 10],
  expected_result = 28;
console.log(
  `calculated_result : ${solution(
    n,
    times
  )}, expected_result : ${expected_result} `
);
