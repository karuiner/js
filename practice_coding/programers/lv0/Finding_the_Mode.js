//최빈값 구하기
function solution(array) {
  let count = 0,
    k = 0,
    db = {},
    ans = -1;
  for (let i of array) {
    if (db[i] === undefined) {
      db[i] = 0;
    }
    db[i]++;
    if (db[i] > k) {
      k = db[i];
      ans = i;
      count = 1;
    } else if (db[i] === k) {
      count++;
    }
  }
  return count > 1 ? -1 : ans;
}
