//올바른 괄호
function solution(s) {
  let l = 0,
    ans = true,
    n = s.length,
    c = 0,
    hn = Math.floor(n / 2);
  if (n % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    l += s[i] === "(" ? 1 : -1;
    c += s[i] === "(" ? 1 : 0;
    if (l < 0 || c > hn) {
      ans = false;
      break;
    }
  }
  return ans;
}
let values = [
  ["()()", true],
  ["(())()", true],
  [")()(", false],
  ["(()(", false],
];
for (let [s, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(s)}, expected_result : ${expected_result} `
  );
}
