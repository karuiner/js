//최고의 집합
function solution(n, s) {
  let ans = [-1];
  if (n < s) {
    let [c, r] = [Math.floor(s / n), s % n];
    ans = [];
    for (let i = 0; i < n; i++) {
      if (r > 0) {
        ans[n - 1 - i] = c + 1;
        r--;
      } else {
        ans[n - 1 - i] = c;
      }
    }
  }

  return ans;
}
let values = [
  [2, 9, [4, 5]],
  [2, 1, [-1]],
  [2, 8, [4, 4]],
];
for (let [n, s, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      n,
      s
    )}, expected_result : ${expected_result} `
  );
}
