// A로 B 만들기
function solution(before, after) {
  let ans = 0,
    n = before.length,
    db = {};
  for (let i = 0; i < n; i++) {
    let [a, b] = [before[i], after[i]];
    if (db[a] === undefined) {
      db[a] = 0;
    }
    db[a] += 1;

    if (db[b] === undefined) {
      db[b] = 0;
    }
    db[b] -= 1;
  }
  for (let k in db) {
    ans += Math.abs(db[k]);
  }

  return ans > 0 ? 0 : 1;
}
