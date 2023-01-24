//한 번만 등장한 문자
function solution(s) {
  let db = {},
    key = [],
    ans = [];
  for (let i of s) {
    if (db[i] === undefined) {
      db[i] = 0;
      key.push(i);
    }
    db[i]++;
  }
  for (let i of key) {
    if (db[i] === 1) {
      ans.push(i);
    }
  }
  ans.sort((a, b) => (a < b ? -1 : 1));
  return ans.join("");
}
