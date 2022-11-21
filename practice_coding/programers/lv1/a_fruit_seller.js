//과일 장수

// 풀이 완료
function solution(k, m, score) {
  let ans = 0,
    db = {},
    key = [];
  for (let i of score) {
    if (db[i] === undefined) {
      key.push(i);
      db[i] = 0;
    }
    db[i]++;
  }
  key.sort((a, b) => b - a);
  let c = 0;
  for (let i of key) {
    while (db[i] > 0) {
      let u = m - c;
      if (db[i] >= u) {
        ans += i * m;
        db[i] -= u;
        c = 0;
      } else {
        c += db[i];
        db[i] = 0;
      }
    }
  }

  return ans;
}
