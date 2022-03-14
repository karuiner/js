//괄호 회전하기
function solution(s) {
  let ans = 0,
    db = { "[": "]", "(": ")", "{": "}" },
    n = s.length;
  function check(s) {
    let l = 0,
      level = [],
      ans = 1;
    for (let i of s) {
      if (l < 0) {
        ans = 0;
        break;
      } else {
        if (i === "[" || i === "{" || i === "(") {
          level[l] = i;
          l++;
        } else if (db[level[l - 1]] === i) {
          l--;
        } else {
          ans = 0;
          break;
        }
      }
    }
    return l === 0 ? ans : 0;
  }
  if (n % 2 === 0) {
    for (let i = 0; i < n; i++) {
      ans += check(s);
      s = s.slice(1) + s[0];
    }
  }

  return ans;
}
let values = [
  ["[](){}", 3],
  ["}]()[{", 2],
  ["[)(]", 0],
  ["}}}", 0],
];

for (let [s, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(s)}, expected_result : ${expected_result} `
  );
}
