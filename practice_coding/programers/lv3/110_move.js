//110 옮기기

//시도 2
function solution2(s) {
  let ans = [];

  function cut(s) {
    return s.replace("110", "");
  }

  function f(s, c) {
    let ns = cut(s);
    if (ns.length < s.length) {
      return f(ns, c + 1);
    } else {
      return [s, c];
    }
  }
  function find(s) {
    let k = s.length,
      p = s + "110";
    for (let i = 0; i < s.length; i++) {
      let ns = s.slice(0, i) + "110" + s.slice(i);
      if (ns < p) {
        p = ns;
        k = i;
      }
    }
    return k;
  }

  for (let i of s) {
    let [ns, c] = f(i, 0);
    let k = find(ns);
    let sub = "";
    for (let j = 0; j < c; j++) {
      sub += "110";
    }
    ans.push(ns.slice(0, k) + sub + ns.slice(k));
  }

  return ans;
}

// 시도 1
function solution(s) {
  let ans = [];

  function geti(s) {
    let n = s.length,
      ans = [];
    for (let i = 0; i < n - 2; i++) {
      if (s.slice(i, i + 3) === "110") {
        ans.push(i);
      }
    }
    return ans;
  }
  function f(s) {
    let ans = "",
      n = s.length;
    for (let i = 0; i < n + 1; i++) {
      let ns = s.slice(0, i) + "110" + s.slice(i);
      if (ans.length === 0) {
        ans = ns;
      } else if (ns < ans) {
        ans = ns;
      }
    }
    return ans;
  }
  function check(s) {
    let idx = geti(s),
      ans = s;
    if (idx.length > 0) {
      for (let i of idx) {
        let ns = s.slice(0, i) + s.slice(i + 3);
        let sub = f(ns);
        if (sub < ans) {
          ans = sub;
        }
      }
    }

    return ans;
  }

  for (let i of s) {
    let sub = check(i);
    while (sub < i) {
      i = sub;
      sub = check(i);
    }
    ans.push(sub);
  }

  return ans;
}
let n = 300,
  s = "";
for (let i = 0; i < n; i++) {
  let k = Math.random();
  s += k > 0.7 ? "0" : "1";
}
console.log([s]);
console.log(solution([s]));
console.log(solution2([s]));
