//양과 늑대

// 풀이 시도
function solution(info, edges) {
  let ans = 0,
    wolf = 0,
    arr = [0],
    db = {};
  for (let [i, j] of edges) {
    if (db[i] === undefined) {
      db[i] = [];
    }
    arr[j] = i;
    db[i].push(j);
  }
  let query = [0],
    qq = 0;
  while (query.length > 0 && qq < 20) {
    let present = [ans, wolf],
      sub = [],
      max = [...present],
      select = -1;
    for (let i = 0; i < query.length; i++) {
      let p = [...present];
      let k = query[i];
      if (!info[k]) {
        p[0]++;
      } else {
        p[1]++;
      }

      if (p[0] > max[0] && p[1] <= max[1]) {
        max = [...p];
        select = i;
      }
    }
    console.log(query, select);
    if (select < 0) {
      break;
    } else {
      let k = query[select],
        u = [];
      if (db[k]) {
        u = db[k];
      }
      query = [...query.slice(0, select), ...query.slice(select + 1), ...u];

      [ans, wolf] = max;
    }
    console.log(query, select, qq);
    qq++;
  }

  console.log(arr, db);

  return ans;
}
