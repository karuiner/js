//문자열 밀기
function solution(A, B) {
  let ans = -1,
    db = {},
    n = A.length;
  for (let i = 0; i < n; i++) {
    let k = A[i];
    if (db[k] === undefined) {
      db[k] = [];
    }
    db[k].push(i);
  }
  for (let i of db[B[0]]) {
    let p = A.slice(i, n) + A.slice(0, i);
    if (p === B) {
      ans = (n - i) % n;
    }
  }

  return ans;
}
