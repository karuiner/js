/*
 *
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
// 풀이 완료
var smallestStringWithSwaps = function (s, pairs) {
  let l = s.length,
    arr = [],
    db = {},
    c = 0;

  function f(a, b) {
    db[b].pnode = db[a].pnode;
    if (db[a].children[b] === undefined) {
      db[a].children[b] = true;
      db[a].s += s[b];
      // db[a].s=add(db[a].s,s[b])
    }
    for (let k in db[b].children) {
      f(a, k);
    }
    db[b].children = {};
    db[b].s = s[b];
  }

  pairs.forEach(([a, b]) => {
    [a, b] = a < b ? [a, b] : [b, a];
    if (db[a] === undefined) {
      db[a] = { pnode: a, children: {}, s: s[a], c: 0 };
    }
    if (db[b] === undefined) {
      db[b] = { pnode: b, children: {}, s: s[b], c: 0 };
    }
    if (a !== b && db[a].pnode !== db[b].pnode) {
      let [pa, pb] = [db[a].pnode, db[b].pnode];
      let [k, x] = pa < pb ? [pa, pb] : [pb, pa];

      if (pa < pb) {
        f(pa, pb);
        if (pb !== b) {
          f(pa, b);
        }
      } else {
        f(pb, pa);
        if (pa !== a) {
          f(pb, a);
        }
      }
    }
  });
  for (let i in db) {
    if (db[i].s.length > 1) {
      db[i].s = db[i].s.split("").sort().join("");
    }
  }
  let ans = "";
  for (let i = 0; i < l; i++) {
    if (db[i]) {
      let pnode = db[i].pnode;
      ans += db[pnode].s[db[pnode].c];
      db[pnode].c++;
    } else {
      ans += s[i];
    }
  }
  return ans;
};

// Runtime: 791 ms, faster than 19.48% of JavaScript online submissions for Smallest String With Swaps.
// Memory Usage: 94.4 MB, less than 31.58% of JavaScript online submissions for Smallest String With Swaps.

// 문제 예문 그룹나누기 성공
var smallestStringWithSwaps = function (s, pairs) {
  let l = s.length,
    arr = [],
    db = {},
    c = 0;

  function f(a, b) {
    db[b].pnode = db[a].pnode;
    if (db[a].children[b] === undefined) {
      db[a].children[b] = true;
      db[a].s += s[b];
    }
    for (let k in db[b].children) {
      f(a, k);
    }
    db[b].children = {};
    db[b].s = s[b];
  }

  pairs.forEach(([a, b]) => {
    [a, b] = a < b ? [a, b] : [b, a];
    if (db[a] === undefined) {
      db[a] = { pnode: a, children: {}, s: s[a] };
    }
    if (db[b] === undefined) {
      db[b] = { pnode: b, children: {}, s: s[b] };
    }
    if (a !== b && db[a].pnode !== db[b].pnode) {
      let [pa, pb] = [db[a].pnode, db[b].pnode];
      let [k, x] = pa < pb ? [pa, pb] : [pb, pa];

      if (pa < pb) {
        f(pa, pb);
        if (pb !== b) {
          f(pa, b);
        }
      } else {
        f(pb, pa);
        if (pa !== a) {
          f(pb, a);
        }
      }
    }
  });
};

// 페어 그룹 나누기 고민중
var smallestStringWithSwaps = function (s, pairs) {
  let l = s.length,
    arr = [],
    db = {},
    c = 0;
  pairs.sort((a, b) => {
    let ai = a[0] < a[1] ? a[0] : a[1],
      bi = b[0] < b[1] ? b[0] : b[1];

    return ai - bi;
  });
  console.log(pairs);

  pairs.forEach(([a, b]) => {
    [a, b] = a < b ? [a, b] : [b, a];
    if (db[a] === undefined) {
      db[a] = {};
    }

    if (a !== b && db[a][b] === undefined) {
      db[a][b] = true;
      let check = [b];
      while (check.length > 0) {
        let ncheck = [];
        for (let i of check) {
          if (db[i] !== undefined && db[a][i] === undefined) {
            ncheck = ncheck.concat(Object.keys(db[i]));
            db[a][i] = true;
            delete db[i];
          }
        }
      }
    }
  });

  console.log(db);
};

// 시도 8 (34/36)

var smallestStringWithSwaps = function (s, pairs) {
  let l = s.length,
    arr = [],
    db = {};

  for (let i = 0; i < l; i++) {
    arr[i] = i;
    db[i] = { arr: [i], s: s[i] };
  }
  function find(s, k) {
    let [a, b] = [0, s.length - 1];
    while (a < b) {
      let m = Math.floor((a + b) / 2);
      if (s[m] < k) {
        a = m + 1;
      } else {
        b = m;
      }
    }
    return a;
  }

  function add(s1, s2) {
    [s1, s2] = s1[0] < s2[0] ? [s1, s2] : [s2, s1];
    let l1 = s1.length,
      l2 = s2.length;
    if (s1[l - 1] <= s2[0]) {
      return s1 + s2;
    } else {
      let k = find(s1, s2[0]),
        q = 0,
        ns = s1.slice(0, k);
      while (k < l1 && q < l2) {
        if (s2[q] < s1[k]) {
          ns += s2[q];
          q++;
        } else {
          ns += s1[k];
          k++;
        }
      }
      if (k < l1) {
        ns += s1.slice(k);
      }
      if (q < l2) {
        ns += s2.slice(q);
      }
      return ns;
    }
  }

  for (let [i, j] of pairs) {
    if (i !== j) {
      let k = arr[j];
      let u = arr[i];
      if (k !== u) {
        if (u < k) {
          for (let i of db[k].arr) {
            arr[i] = u;
          }
          db[u].arr.push(...db[k].arr);
          db[u].arr.sort((a, b) => a - b);
          db[u].s = add(db[u].s, db[k].s);
          delete db[k];
        } else {
          for (let i of db[u].arr) {
            arr[i] = k;
          }
          db[k].arr.push(...db[u].arr);
          db[k].arr.sort((a, b) => a - b);
          db[k].s = add(db[k].s, db[u].s);
          delete db[u];
        }
      }
    }
  }
  let ans = [];
  for (let key in db) {
    let k = db[key].arr.length;
    for (let i = 0; i < k; i++) {
      let j = db[key].arr[i];
      ans[j] = db[key].s[i];
    }
  }

  return ans.join("");
};

// 시도 7 (34/36)
var smallestStringWithSwaps = function (s, pairs) {
  let l = s.length,
    arr = [],
    db = {};

  function f(x) {
    while (arr[x] !== x) {
      x = arr[x];
    }
    return x;
  }

  for (let i = 0; i < l; i++) {
    arr[i] = i;
  }
  for (let [i, j] of pairs) {
    if (i !== j) {
      let k = f(j);
      let u = f(i);
      if (u < k) {
        arr[k] = u;
      } else {
        arr[u] = k;
      }
    }
  }
  for (let i = 0; i < l; i++) {
    let x = f(i);
    if (db[x] === undefined) {
      db[x] = [];
    }
    db[x].push(s[i]);
  }
  for (let key in db) {
    db[key].sort();
  }
  let ans = "";
  for (let i = 0; i < l; i++) {
    let x = f(i);
    ans += db[x][0];
    db[x] = db[x].slice(1);
  }

  return ans;
};

// 시도 6
var smallestStringWithSwaps = function (s, pairs) {
  let db = {},
    ans = s,
    check = true;
  pairs = pairs.map(([a, b]) => {
    return a < b ? [a, b] : [b, a];
  });
  pairs = pairs.filter(([a, b]) => a !== b);
  let test = [s];
  while (check) {
    check = false;
    let next = [];
    for (let sub of test) {
      for (let [a, b] of pairs) {
        let v = `${sub.slice(0, a)}${sub[b]}${sub.slice(a + 1, b)}${
          sub[a]
        }${sub.slice(b + 1)}`;
        if (db[v] === undefined) {
          db[v] = true;
          if (v < ans) {
            ans = v;
          }
          next.push(v);
          if (!check) {
            check = true;
          }
        }
      }
    }
    test = next;
  }
  return ans;
};

// 시도 5
var smallestStringWithSwaps = function (s, pairs) {
  let db = {},
    arr = s.split(""),
    ans = s;

  function f(sub) {
    let exm = [];
    for (let [a, b] of pairs) {
      [sub[a], sub[b]] = [sub[b], sub[a]];
      let s = sub.join("");
      if (db[s] === undefined) {
        db[s] = true;
        if (s < ans) {
          ans = s;
        }
        exm.push([s, sub]);
        f(sub);
      }
      [sub[a], sub[b]] = [sub[b], sub[a]];
    }
  }
  f(arr);
  return ans;
};

// 시도 4 준비중
// var smallestStringWithSwaps = function (s, pairs) {
//   function mkpath(arr, l) {
//     let db = {};
//     for (let [i, j] of arr) {
//       if (db[i] === undefined) {
//         db[i] = {};
//       }
//       db[i][j] = true;
//       if (db[j] === undefined) {
//         db[j] = {};
//       }
//       db[j][i] = true;
//     }
//     let keys = Object.keys(db);
//     for (let i of keys) {
//       let s = i,
//         out = {},
//         next = [i];
//       while (next.length > 0) {
//         let sub = [...next];
//         next = [];
//         for (let j of sub) {
//           if (j !== i && db[i][j] === undefined) {
//             db[i][j] = true;
//           }
//           out[j] = true;
//           let k = Object.keys(db[j]).filter((x) => out[x] === undefined);
//           next = next.concat(k);
//         }
//       }
//     }

//     return db;
//   }
//   let pdb = mkpath(pairs, s.length),
//     car = s.split("");
//   let sdb = {},
//     key = [],
//     check = Array(s.length).fill(false),
//     min = 0;
//   car.forEach((x, i) => {
//     if (sdb[x] === undefined) {
//       sdb[x] = {};
//       key.push(x);
//     }
//     sdb[x][i] = true;
//   });
//   key.sort();

//   for (let i of key) {
//     let q = Object.keys(sdb[i]).map(Number),
//       sub = [];
//     for (let j of q) {
//       sub.push(
//         Object.keys(pdb[j])
//           .map(Number)
//           .filter((x) => !check[x])
//       );
//     }
//     console.log(i, sub);
//   }

//   console.log(pdb);
//   return car.join("");
// };

// 시도 3
// var smallestStringWithSwaps = function (s, pairs) {
//   let db = {},
//     ans = s;

//   function change(s, i, j) {
//     return s.slice(0, i) + s[j] + s.slice(i + 1, j) + s[i] + s.slice(j + 1);
//   }

//   function f(s) {
//     if (db[s] === undefined) {
//       db[s] = true;
//       if (s < ans) {
//         ans = s;
//       }
//       for (let [i, j] of pairs) {
//         f(change(s, i, j));
//       }
//     }
//   }
//   f(s);
//   return ans;
// };

//시도 2
// var smallestStringWithSwaps = function (s, pairs) {
//   function mkpath(arr, l) {
//     let db = {};
//     for (let [i, j] of arr) {
//       if (db[i] === undefined) {
//         db[i] = {};
//       }
//       db[i][j] = true;
//       if (db[j] === undefined) {
//         db[j] = {};
//       }
//       db[j][i] = true;
//     }
//     let keys = Object.keys(db);
//     for (let i of keys) {
//       let s = i,
//         out = {},
//         next = [i];
//       while (next.length > 0) {
//         let sub = [...next];
//         next = [];
//         for (let j of sub) {
//           if (j !== i && db[i][j] === undefined) {
//             db[i][j] = true;
//           }
//           out[j] = true;
//           let k = Object.keys(db[j]).filter((x) => out[x] === undefined);
//           next = next.concat(k);
//         }
//       }
//     }

//     return db;
//   }
//   let pdb = mkpath(pairs, s.length),
//     car = s.split("");
//   let sdb = {},
//     key = [],
//     check = Array(s.length).fill(false),
//     min = 0;
//   car.forEach((x, i) => {
//     if (sdb[x] === undefined) {
//       sdb[x] = {};
//       key.push(x);
//     }
//     sdb[x][i] = true;
//   });
//   key.sort();

//   for (let i of key) {
//     console.log(i, Object.keys(sdb[i]).map(Number));
//   }

//   console.log(pdb);
//   return car.join("");
// };

// 시도 1
// var smallestStringWithSwaps = function (s, pairs) {
//   let check = false,
//     arr = s.split(""),
//     ans = s;
//   while (!check) {
//     check = true;
//     for (let [i, j] of pairs) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       ans = arr.join("");
//       break;
//     }
//   }
//   return ans;
// };
