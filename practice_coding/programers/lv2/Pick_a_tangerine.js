//귤 고르기

//풀이 완료
function solution(k, tangerine) {
  let ans = 0,
    db = {},
    key = [];
  for (let i of tangerine) {
    if (db[i] === undefined) {
      db[i] = 0;
      key.push(i);
    }
    db[i]++;
  }
  key.sort((a, b) => db[b] - db[a]);
  let s = 0;
  for (let i of key) {
    s += db[i];
    ans++;
    if (s >= k) {
      break;
    }
  }

  return ans;
}
