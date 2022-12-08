//양과 늑대

// 풀이 완료
function solution(info, edges) {
  let ans = 0,
    wolf = 0,
    arr = [0],
    db = {},
    sheep = [];
  for (let [i, j] of edges) {
    if (db[i] === undefined) {
      db[i] = [];
    }
    arr[j] = i;
    db[i].push(j);
  }
  function f(arr, sheep, wolf) {
    let ans = sheep;
    for (let idx = 0; idx < arr.length; idx++) {
      let u = arr[idx],
        [a, b] = [sheep, wolf],
        x = [];
      if (db[u]) {
        x = db[u];
      }
      let subarr = [...x, ...arr.slice(0, idx), ...arr.slice(idx + 1)];
      let k = sheep - wolf;
      if (info[u]) {
        b++;
      } else {
        a++;
      }
      if (a - b > 0) {
        let sub = f(subarr, a, b);
        if (sub > ans) {
          ans = sub;
        }
      }
    }
    return ans;
  }
  ans = f([0], 0, 0);
  return ans;
}

// 풀이 시도 1
function solution(info, edges) {
  let ans = 0,
    wolf = 0,
    arr = [0],
    db = {},
    sheep = [];
  for (let i = 0; i < info.length; i++) {
    if (info[i] === 0) {
      sheep.push([i, 0]);
    }
  }

  for (let [i, j] of edges) {
    if (db[i] === undefined) {
      db[i] = [];
    }
    arr[j] = i;
    db[i].push(j);
  }
  for (let i = 0; i < sheep.length; i++) {
    let k = sheep[i][0],
      s = 0;
    while (k !== 0) {
      if (info[k]) {
        s++;
      }
      k = arr[k];
    }
    sheep[i][1] = s;
  }
  sheep.sort((a, b) => {
    return a[1] - b[1] !== 0 ? a[1] - b[1] : a[0] - b[0];
  });
  for (let [i, j] of sheep) {
    let k = i,
      p = [ans, wolf];
    if (k !== 0) {
      while (k !== 0) {
        if (info[k] == 0) {
          p[0]++;
        } else if (info[k] === 1) {
          p[1]++;
        }
        if (info[k] >= 0) {
          info[k] = -1;
        }
        k = arr[k];
      }
    } else {
      if (info[k] === 0) {
        p[0]++;
      } else if (info[k] === 1) {
        p[1]++;
      }
      info[k] = -1;
    }
    if (ans > 0 ? ans > p[1] : ans >= p[1]) {
      [ans, wolf] = p;
    } else {
      break;
    }
  }

  return ans;
}
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
