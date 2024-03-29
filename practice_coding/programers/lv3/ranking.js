// 순위

// 풀이 성공
function solution(n, results) {
  let data = [],
    ans = 0;
  for (let i = 0; i < n; i++) {
    let sub = [];
    for (let j = 0; j < n; j++) {
      sub[j] = false;
    }
    sub.push({ w: [], d: [], c: 0 });
    data[i] = sub;
  }
  function f(w, d) {
    if (data[w][d] === false) {
      data[w][d] = "W";
      data[w][n].d.push(d);
      data[w][n].c++;
      data[d][w] = "D";
      data[d][n].w.push(w);
      data[d][n].c++;
    }

    for (let i of data[w][n].w) {
      for (let j of data[w][n].d) {
        if (data[i][j] === false) {
          f(i, j);
        }
      }
    }

    for (let i of data[d][n].w) {
      for (let j of data[d][n].d) {
        if (data[i][j] === false) {
          f(i, j);
        }
      }
    }
  }

  for (let [w, d] of results) {
    f(w - 1, d - 1);
  }
  for (let i = 0; i < n; i++) {
    if (data[i][n].c === n - 1) {
      ans++;
    }
  }
  return ans;
}

// 재시도
// function solution(n, results) {
//   let data = [],
//     ans = 0;
//   for (let i = 0; i < n; i++) {
//     let sub = [];
//     for (let j = 0; j < n; j++) {
//       sub[j] = false;
//     }
//     sub.push({ w: [], d: [], c: 0 });
//     data[i] = sub;
//   }
//   function f(w, d) {
//     if (data[w][d] === false) {
//       data[w][d] = "W";
//       data[w][n].d.push(d);
//       data[w][n].c++;
//       data[d][w] = "D";
//       data[d][n].w.push(w);
//       data[d][n].c++;
//     }

//     if (data[w][n].c < n) {
//       for (let i of data[w][n].w) {
//         if (data[i][w] === false) {
//           f(i, w);
//         }
//       }
//       for (let i of data[w][n].d) {
//         if (data[w][i] === false) {
//           f(w, i);
//         }
//       }
//     }

//     if (data[d][n].c < n) {
//       for (let i of data[d][n].w) {
//         if (data[i][d] === false) {
//           f(i, d);
//         }
//       }
//       for (let i of data[d][n].d) {
//         if (data[d][i] === false) {
//           f(d, i);
//         }
//       }
//     }
//   }

//   for (let [w, d] of results) {
//     f(w - 1, d - 1);
//   }

//   return ans;
// }

// 풀이시도 7 - 2번 문항을 제외한 모든 문제 풀이
// function solution(n, results) {
//   let ans = 0,
//     dp = [],
//     check = [];
//   for (let i = 0; i < n; i++) {
//     let sub = [];
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         sub.push(-1);
//       } else {
//         sub.push(null);
//       }
//     }
//     let ob = { w: [], d: [], c: 0 };
//     sub.push(ob);
//     dp.push(sub);
//     check.push(-1);
//   }
//   function f(i, j) {
//     if (dp[i][j] === null) {
//       dp[i][j] = "W";
//       dp[i][n].c++;
//       dp[i][n].d.push(j);
//       if (dp[i][n].c === n - 1) {
//         ans++;
//         check[dp[i][n].w.length] = i;
//       }
//     }
//     if (dp[j][i] === null) {
//       dp[j][i] = "D";
//       dp[j][n].c++;
//       dp[j][n].w.push(i);
//       if (dp[j][n].c === n - 1) {
//         ans++;
//         check[dp[j][n].w.length] = j;
//       }
//     }
//   }

//   for (let [i, j] of results) {
//     i--;
//     j--;
//     f(i, j);
//     if (dp[j][n].d.length > 0) {
//       for (let k of dp[j][n].d) {
//         f(i, k);
//       }
//     }
//     if (dp[i][n].w.length > 0) {
//       for (let k of dp[i][n].w) {
//         f(k, j);
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     if (dp[i][n].c < n - 1) {
//       let k = n - 1 - dp[i][n].c,
//         w = dp[i][n].w.length,
//         j = dp[i].indexOf(null);
//       if (check[w] > 0) {
//         f(j, i);
//       } else if (check[w + 1] > 0) {
//         f(i, j);
//       }
//     }
//   }
//   return ans;
// }

// 풀이시도  6
// function solution(n, results) {
//   let ans = 0,
//     dp = [],
//     check = [];
//   for (let i = 0; i < n; i++) {
//     let sub = [];
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         sub.push(-1);
//       } else {
//         sub.push(null);
//       }
//     }
//     let ob = { w: [], d: [], c: 0 };
//     sub.push(ob);
//     dp.push(sub);
//     check.push(-1);
//   }
//   function f(i, j) {
//     if (dp[i][j] === null) {
//       dp[i][j] = "W";
//       dp[i][n].c++;
//       dp[i][n].d.push(j);
//       if (dp[i][n].c === n - 1) {
//         ans++;
//         check[dp[i][n].w.length] = i;
//       }
//     }
//     if (dp[j][i] === null) {
//       dp[j][i] = "D";
//       dp[j][n].c++;
//       dp[j][n].w.push(i);
//       if (dp[j][n].c === n - 1) {
//         ans++;
//         check[dp[j][n].w.length] = j;
//       }
//     }
//   }

//   for (let [i, j] of results) {
//     i--;
//     j--;
//     f(i, j);
//     if (dp[j][n].d.length > 0) {
//       for (let k of dp[j][n].d) {
//         f(i, k);
//       }
//     }
//     if (dp[i][n].w.length > 0) {
//       for (let k of dp[i][n].w) {
//         f(k, j);
//       }
//     }
//   }
//   console.log(dp);
//   console.log(check);
//   for (let i = 0; i < n; i++) {
//     if (dp[i][n].c < n - 1) {
//       let k = n - 1 - dp[i][n].c,
//         w = dp[i][n].w.length;
//       console.log(k, w);
//     }
//   }
//   return ans;
// }

// 풀이시도 5
// function solution(n, results) {
//   let ans = 0,
//     dp = [],
//     check = [];
//   for (let i = 0; i < n; i++) {
//     let sub = [];
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         sub.push(-1);
//       } else {
//         sub.push(null);
//       }
//     }
//     let ob = { w: [], d: [], c: 0 };
//     sub.push(ob);
//     dp.push(sub);
//     check.push(-1);
//   }
//   function f(i, j) {
//     if (dp[i][j] === null) {
//       dp[i][j] = "W";
//       dp[i][n].c++;
//       dp[i][n].d.push(j);
//       if (dp[i][n].c === n - 1) {
//         ans++;
//         check[dp[i][n].w.length] = i;
//       }
//     }
//     if (dp[j][i] === null) {
//       dp[j][i] = "D";
//       dp[j][n].c++;
//       dp[j][n].w.push(i);
//       if (dp[j][n].c === n - 1) {
//         ans++;
//         check[dp[j][n].w.length] = j;
//       }
//     }
//   }

//   for (let [i, j] of results) {
//     i--;
//     j--;
//     f(i, j);
//     if (dp[j][n].d.length > 0) {
//       for (let k of dp[j][n].d) {
//         f(i, k);
//       }
//     }
//     if (dp[i][n].w.length > 0) {
//       for (let k of dp[i][n].w) {
//         f(k, j);
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     if (dp[i][n].c < n - 1) {
//       for (let j = 0; j < n; j++) {
//         let k = check[j];
//         if (k !== -1 && i !== k) {
//           let s = dp[i][k];
//           console.log(i, k, s);
//           if (s === "W") {
//             f(i, k);
//           } else {
//             f(k, i);
//           }
//         }
//       }
//     }
//   }
//   return ans;
// }

// 풀이시도 4 완벽하지는 않으나 처음으로 완성된 코드 풀이방법.
// 10개의 예제중  6개 풀이 완료
// function solution(n, results) {
//   let ans = 0,
//     dp = [];
//   for (let i = 0; i < n; i++) {
//     let sub = [];
//     for (let j = 0; j < n; j++) {
//       if (i === j) {
//         sub.push(-1);
//       } else {
//         sub.push(null);
//       }
//     }
//     let ob = { w: [], d: [], c: 0 };
//     sub.push(ob);
//     dp.push(sub);
//   }
//   for (let [i, j] of results) {
//     i--;
//     j--;
//     if (dp[i][j] === null) {
//       dp[i][j] = "W";
//       dp[i][n].c++;
//       dp[i][n].d.push(j);
//       if (dp[i][n].c === n - 1) {
//         ans++;
//       }
//     }
//     if (dp[j][i] === null) {
//       dp[j][i] = "D";
//       dp[j][n].c++;
//       dp[j][n].w.push(i);
//       if (dp[j][n].c === n - 1) {
//         ans++;
//       }
//     }

//     if (dp[j][n].d.length > 0) {
//       for (let k of dp[j][n].d) {
//         if (dp[i][k] === null) {
//           dp[i][k] = "W";
//           dp[i][n].d.push(k);
//           dp[i][n].c++;
//           if (dp[i][n].c === n - 1) {
//             ans++;
//           }
//         }
//         if (dp[k][i] === null) {
//           dp[k][i] = "D";
//           dp[k][n].w.push(i);
//           dp[k][n].c++;
//           if (dp[k][n].c === n - 1) {
//             ans++;
//           }
//         }
//       }
//     }
//     if (dp[i][n].w.length > 0) {
//       for (let k of dp[i][n].w) {
//         if (dp[k][j] === null) {
//           dp[k][j] = "W";
//           dp[k][n].d.push(j);
//           dp[k][n].c++;
//           if (dp[k][n].c === n - 1) {
//             ans++;
//           }
//         }
//         if (dp[j][k] === null) {
//           dp[j][k] = "D";
//           dp[j][n].w.push(k);
//           dp[j][n].c++;
//           if (dp[j][n].c === n - 1) {
//             ans++;
//           }
//         }
//       }
//     }
//   }

//   return ans;
// }

// 풀이시도 3 풀이법에대한 고민중. 확정된 풀이법 구상이 안됨
// function solution(n, results) {
//   let ans = 0,
//     dp = [],
//     rank = [],
//     c = [],
//     t = [],
//     sub = [];
//   for (let i = 0; i < n; i++) {
//     dp[i] = { w: [], d: [] };
//     c[i] = 0;
//     rank[i] = -1;
//     sub.push(i);
//   }
//   for (let [w, d] of results) {
//     dp[d - 1].w.push(w - 1);
//     dp[w - 1].d.push(d - 1);
//     c[d - 1]++;
//     c[w - 1]++;
//     if (c[w - 1] === n - 1) {
//       let k = dp[w - 1].w.length;
//       rank[k] = w - 1;
//       t.push(w - 1);
//     }
//     if (c[d - 1] === n - 1) {
//       let k = dp[d - 1].w.length;
//       rank[k] = d - 1;
//       t.push(d - 1);
//     }
//   }
//   t.sort((a, b) => a - b);
//   function f(arr) {
//     let n = arr.length,
//       ans = false;
//     if (n === 2) {
//       let [a, b] = arr;
//       if (dp[a].w.includes(b) || dp[a].d.includes(b)) {
//         ans = true;
//       }
//     } else {
//       let a = arr[0],
//         sub = arr.slice(1);
//       let w = dp[a].w.filter((x) => sub.includes(x)),
//         d = dp[a].d.filter((x) => sub.includes(x));
//       console.log(a, sub, w, d);
//       if (w.length > 1) {
//         let q = f(w);
//         if (q) {
//           ans = q;
//         }
//       } else {
//         ans = true;
//       }
//       if (d.length > 1) {
//         let q = f(d);
//         if (q) {
//           ans = q;
//         }
//       } else {
//         ans = true;
//       }
//     }
//     return ans;
//   }
//   function f2(n, arr) {
//     if (n === 1 && arr.length === 1) {
//       return true;
//     }
//     let node = [];
//     for (let i = 0; i < arr.length; i++) {
//       node[i] = i;
//     }
//     for (let i of arr) {
//       console.log(
//         dp[i].w.filter((x) => arr.includes(x)),
//         dp[i].d.filter((x) => arr.includes(x))
//       );
//     }
//   }
//   console.log(dp, t);
//   if (t.length > 0) {
//     sub = [...dp[t[0]].w];
//   }
//   console.log(sub);
//   f2(sub.length, sub);

//   return ans;
// }

// 풀이 시도 2
// function solution(n, results) {
//   let ans = 0,
//     dp = [],
//     rank = [],
//     c = [],
//     t = [];
//   for (let i = 0; i < n; i++) {
//     dp[i] = { w: [], d: [] };
//     c[i] = 0;
//     rank[i] = -1;
//   }
//   for (let [w, d] of results) {
//     dp[d - 1].w.push(w - 1);
//     dp[w - 1].d.push(d - 1);
//     c[d - 1]++;
//     c[w - 1]++;
//     if (c[w - 1] === n - 1) {
//       let k = dp[w - 1].w.length;
//       rank[k] = w - 1;
//       t.push(w - 1);
//     }
//     if (c[d - 1] === n - 1) {
//       let k = dp[d - 1].w.length;
//       rank[k] = d - 1;
//       t.push(d - 1);
//     }
//   }
//   t.sort((a, b) => a - b);
//   function f(arr) {
//     let n = arr.length,
//       ans = false;
//     if (n === 2) {
//       let [a, b] = arr;
//       if (dp[a].w.includes(b) || dp[a].d.includes(b)) {
//         ans = true;
//       }
//     } else {
//       let a = arr[0],
//         sub = arr.slice(1);
//       let w = dp[a].w.filter((x) => sub.includes(x)),
//         d = dp[a].d.filter((x) => sub.includes(x));
//       console.log(a, sub, w, d);
//       if (w.length > 1) {
//         let q = f(w);
//         if (q) {
//           ans = q;
//         }
//       } else {
//         ans = true;
//       }
//       if (d.length > 1) {
//         let q = f(d);
//         if (q) {
//           ans = q;
//         }
//       } else {
//         ans = true;
//       }
//     }
//     return ans;
//   }
//   console.log(t, dp);
//   if (t.length > 0) {
//     console.log(f(dp[t[0]].w));
//     console.log(f(dp[t[0]].d));
//   }

//   if (t.length === 0) {
//   } else {
//   }

//   return ans;
// }

// 풀이시도 1
// function solution(n, results) {
//     let ans=0,dp=[],rank=[],c=[],t=[],dummy=[];
//     for (let i =0; i <n;i++){
//         dp[i]={w:[],d:[]}
//         c[i]=0
//         rank[i]=-1
//     }

//     for (let [w,d]of results){
//         dp[d-1].w.push(w-1)
//         dp[w-1].d.push(d-1)
//         c[d-1]++
//         c[w-1]++
//         if (c[w-1]===n-1){
//             let k=dp[w-1].w.length
//             rank[k]=w-1
//             t.push(k)
//         }
//         if (c[d-1]===n-1){
//             let k=dp[d-1].w.length
//             rank[k]=d-1
//             t.push(k)
//         }
//     }
//     t.sort((a,b)=>a-b)
//     if (t.length ===0){

//     }else{

//     }

//     console.log(rank,dp,t)

//     return ans;
// }
