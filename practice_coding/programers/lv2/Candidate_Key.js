//후보키

//풀이 시도 2 (42.9/100)
function solution(relation) {
  let n = relation.length,
    m = relation[0].length,
    db = {};
  function check(key) {
    let subdb = {},
      ans = 0;
    for (let i of relation) {
      let skey = "";
      for (let j of key) {
        skey += i[j];
      }
      if (subdb[skey] === undefined) {
        subdb[skey] = 1;
        ans++;
      }
    }
    return ans === n;
  }
  function f(key, k) {
    let ans = 0;
    if (k >= n) {
      return ans;
    }
    for (let i = k; i < m; i++) {
      if (check([...key, i])) {
        ans++;
      } else {
        let sub = f([...key, i], i + 1);
        ans += sub;
      }
    }

    return ans;
  }
  return f([], 0);
}

//풀이시도 1 (46.4 / 100.0)
function solution(relation) {
  let n = relation.length,
    m = relation[0].length;
  function key(arr) {
    let c = 0,
      db = {};
    for (let i = 0; i < n; i++) {
      let keyname = "";
      for (let j of arr) {
        keyname += "-" + relation[i][j];
      }
      if (db[keyname] === undefined) {
        db[keyname] = c;
        c++;
      }
    }
    return n === c;
  }
  function combi(arr, sub, l) {
    let ans = [];
    if (l > 1) {
      for (let i = 0; i < arr.length; i++) {
        let sans = combi([...arr.slice(i + 1)], [...sub, arr[i]], l - 1);
        ans = [...ans, ...sans];
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        ans.push([...sub, arr[i]]);
      }
    }
    return ans;
  }

  let ans = 0,
    use = Array(m).fill(true),
    q = m,
    i = 1;

  while (i <= q) {
    let arr = use.reduce((acc, x, i) => {
      if (x) {
        acc.push(i);
      }
      return acc;
    }, []);
    let tarr = combi(arr, [], i);
    tarr = tarr.filter((x) => key(x));

    for (let i of tarr) {
      let check = true;

      if (key(i)) {
        for (let j of i) {
          if (!use[j]) {
            check = false;
          }
        }
        if (check) {
          for (let j of i) {
            use[j] = false;
          }
          q -= i.length;
          ans++;
        }
      }
    }

    i++;
  }

  return ans;
}
