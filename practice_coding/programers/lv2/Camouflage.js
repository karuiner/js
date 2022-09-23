//위장

// 풀이 완료 (수학적인 방법으로 풀이)
function solution(clothes) {
  let db = {},
    key = [];
  for (let [name, type] of clothes) {
    if (db[type] === undefined) {
      db[type] = [];
      key.push(type);
    }
    db[type].push(name);
  }
  let count = [];
  for (let i of key) {
    count.push(db[i].length);
  }

  return count.reduce((acc, x) => acc * (x + 1), 1) - 1;
}
