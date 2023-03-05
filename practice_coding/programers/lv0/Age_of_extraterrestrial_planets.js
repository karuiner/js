//외계행성의 나이
function solution(age) {
  let a = "a".charCodeAt(0),
    db = [];
  for (let i = 0; i < 10; i++) {
    let k = String.fromCharCode(a + i);
    db[i] = k;
  }
  let ans = "";
  for (let i of `${age}`) {
    ans += db[Number(i)];
  }

  return ans;
}
