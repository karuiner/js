//110 옮기기

// 풀이완료
function solution5(s) {
  let ans = [];

  function ncount(s) {
    let k = 0,
      c = 0,
      n = s.length,
      ns = [],
      sub = "";
    for (let i = 0; i < n; i++) {
      if (k > 1 && s[i] === "0" && ns[k - 1] === "1" && ns[k - 2] === "1") {
        ns.pop();
        ns.pop();
        k -= 2;
        sub += "110";
      } else {
        ns[k] = s[i];
        k++;
      }
    }

    return [ns.join(""), sub];
  }

  function recon(s, ns) {
    let k = s.lastIndexOf("0");
    if (k >= 0) {
      return s.slice(0, k + 1) + ns + s.slice(k + 1);
    } else {
      return ns + s;
    }
  }

  for (let i of s) {
    let [ns, nns] = ncount(i);
    ans.push(recon(ns, nns));
  }

  return ans;
}

let s = ["1110", "100111100", "0111111010"],
  expected_result = ["1101", "100110110", "0110110111"];

console.log(
  `calculated_result : ${solution(s)}, expected_result : ${expected_result} `
);

// 시도 4
// 110 보다 작은것들을 생각 하자 111 보다는 앞서게 111보다 뒤에있는 110은 앞으로
function solution4(s) {
  let ans = [];

  function count(s) {
    let k = 0,
      c = 0,
      n = s.length;
    while (k < n) {
      if (s.slice(k, k + 3) === "110") {
        s = s.slice(0, k) + s.slice(k + 3);
        c++;
        n -= 3;
        k -= 2;
      } else if (k === n - 3 && s.slice(k, k + 3) !== "110") {
        k = n;
      } else {
        k++;
      }
    }
    return [s, c];
  }
  function count2(s) {
    let k = 0,
      c = 0,
      n = s.length;
    while (k < n) {
      if (s[k] === "0" && s[k - 1] === "1" && s[k - 2] === "1") {
        s = s.slice(0, k - 2) + s.slice(k + 1);
        c++;
        n -= 3;
        k -= 3;
      } else {
        k++;
      }
    }
    return [s, c];
  }
  function count3(s) {
    let k = 0,
      c = 0,
      n = s.length,
      arr = [],
      z = 0,
      ns = [];
    for (let i = 0; i < n; i++) {
      if (s[i] === "0") {
        arr.push(i);
      }
    }
    for (let i of arr) {
      let idx = i - z;
      if (idx >= 2 && s[idx - 1] === "1" && s[idx - 2] === "1") {
        s = s.slice(0, idx - 2) + s.slice(idx + 1);
        z += 3;
        ns[c] = "110";
        c++;
      }
    }

    return [s, ns.join("")];
  }

  function recon(s, ns) {
    let k = s.lastIndexOf("0");
    // let ns='110'.repeat(c)
    if (k >= 0) {
      return s.slice(0, k + 1) + ns + s.slice(k + 1);
    } else {
      return ns + s;
    }
  }

  for (let i of s) {
    let [ns, nns] = count3(i);
    ans.push(recon(ns, nns));
  }

  return ans;
}

// 시도 3
function solution3(s) {
  let ans = [];

  function cut(s) {
    return s.replace("110", "");
  }
  function cut2(s, c) {
    let nc = [...s.matchAll(/110/g)].length;
    return [s.replace(/110/g, ""), c + nc];
  }
  function ncut(s, k) {
    let q = s.length;
    for (let i = k; i < s.length - 2; i++) {
      if (s.slice(i, i + 3) === "110") {
        q = i;
        break;
      }
    }
    return q < s.length
      ? [s.slice(0, q) + s.slice(q + 3), q - 3 < 0 ? 0 : q - 3]
      : [s, q];
  }

  function f2(s, k, c) {
    let [ns, q] = ncut(s, k);
    while (q < ns.length) {
      c++;
      [ns, q] = ncut(ns, q);
    }
    return [ns, c];
  }
  function f(s, c) {
    let ns = cut(s);
    while (ns.length < s.length) {
      s = ns;
      c++;
      ns = cut(s);
    }
    return c > 0 ? [ns, c] : [s, c];
  }
  function f3(s, c) {
    let [ns, nc] = cut2(s, c);
    while (ns.length < s.length) {
      s = ns[(ns, nc)] = cut2(s, nc);
    }
    return c > 0 ? [ns, nc] : [s, c];
  }

  function recon(s, c) {
    let k = s.lastIndexOf("0"),
      p = s + "110";
    let ns = "";
    for (let i = 0; i < c; i++) {
      ns += "110";
    }
    if (k >= 0) {
      return s.slice(0, k + 1) + ns + s.slice(k + 1);
    } else {
      return ns + s;
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
    //      let [ns,c]=f2(i,0,0)
    // let k=find(ns)
    //   let sub=''
    //   for (let j=0; j <c;j++){
    //       sub+='110'
    //   }
    // ans.push(ns.slice(0,k)+sub+ns.slice(k))
    ans.push(recon(ns, c));
  }

  return ans;
}

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
// let n = 300,
//   s = "";
// for (let i = 0; i < n; i++) {
//   let k = Math.random();
//   s += k > 0.7 ? "0" : "1";
// }
// console.log([s]);
// console.log(solution([s]));
// console.log(solution2([s]));
