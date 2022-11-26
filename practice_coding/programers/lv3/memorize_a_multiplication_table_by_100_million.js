//억억단을 외우자

// 풀이 시도 2
function solution(e, starts) {
  let ans = [],
    max = 0,
    marr = [],
    db = {};

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }
  for (let i = 0; i < starts.length; i++) {
    let k = starts[i];
    let max = 0;
    for (let j = k; j <= e; j++) {
      if (db[j] === undefined) {
        db[j] = f(j);
      }
      if (db[j] > max) {
        max = db[j];
        ans[i] = j;
      }
    }
  }

  return ans;
}

// 수정중
function solution(e, starts) {
  let ans = [],
    max = 0,
    arr = [],
    key = [],
    db = {};

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }

  for (let i = 1; i <= e; i++) {
    let k = f(i);
    if (db[k] === undefined) {
      key.push(k);
      db[k] = [];
    }
    db[k].push(i);
    arr.push([...key]);
  }
  console.log(arr);
  for (let i of starts) {
    let all = arr[e - 1];
    let del = arr[i - 1];
    console.log(all, del);
    // for (let j of marr){
    //     if (i <=j){
    //         ans.push(j)
    //         break
    //     }
    // }
  }

  return ans;
}

// 풀이시도 1

function solution(e, starts) {
  let ans = [],
    max = 0,
    marr = [];

  function f(x) {
    let h = Math.floor(Math.sqrt(x)),
      ans = 0;
    for (let i = 1; i <= h; i++) {
      if (x % i === 0) {
        if (i === x / i) {
          ans++;
        } else {
          ans += 2;
        }
      }
    }
    return ans;
  }
  for (let i = 1; i <= e; i++) {
    let k = f(i);

    if (k > max) {
      max = k;
      marr = [i];
    } else if (k === max) {
      marr.push(i);
    }
  }
  for (let i of starts) {
    for (let j of marr) {
      if (i <= j) {
        ans.push(j);
        break;
      }
    }
  }

  return ans;
}
