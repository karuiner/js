// 여행 경로

//시도 1
function solution(tickets) {
  let ans = [],
    db = {},
    key = {};
  for (let i of tickets) {
    if (db[i[0]] === undefined) {
      db[i[0]] = {};
      key[i[0]] = [];
    }
    if (db[i[0]][i[1]] === undefined) {
      db[i[0]][i[1]] = 0;
      key[i[0]].push(i[1]);
    }
    db[i[0]][i[1]]++;
  }
  for (let i in key) {
    key[i].sort();
  }
  function f(x, path, db) {
    let p = key[x],
      ans = [...path];
    if (p === undefined) {
      return path;
    }
    for (let i of p) {
      if (db[x][i] > 0) {
        let sub = { ...db };
        sub[x][i]--;
        let npath = f(i, [...path, i], sub);
        if (npath.length > ans.length) {
          ans = [...npath];
        }
      }
    }

    return ans;
  }

  return f("ICN", ["ICN"], db);
}
