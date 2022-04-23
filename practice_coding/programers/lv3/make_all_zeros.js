//모두 0으로 만들기

// 시도 6 도로백
function solution(a, edges) {
  let s = 0,
    dp = [],
    n = a.length,
    line = [];
  for (let i = 0; i < n; i++) {
    s += a[i];
    dp[i] = i;
    line[i] = [];
  }
  if (s !== 0) {
    return -1;
  }
  for (let [i, j] of edges) {
    line[i].push(j);
    line[j].push(i);
  }

  //     function f(p,x){
  //         let ans=0
  //         for (let j of line[x]){
  //             let k=Number(j)
  //             if (k !==p){
  //                 let sub=f(x,k)
  //                 ans+=sub
  //                 a[x]+=a[k]
  //                 a[k]=0
  //             }

  //         }
  //         return ans+Math.abs(a[x])
  //     }
  //   return f(-1,0);

  let ans = 0,
    stack = [0],
    sample = [[-1, 0]];
  while (sample.length > 0) {
    let sub = [];
    for (let [p, i] of sample) {
      for (let j of line[i]) {
        if (j !== p) {
          sub.push([i, j]);
          stack.unshift(j);
          dp[j] = i;
        }
      }
    }
    sample = [...sub];
  }

  for (let i of stack) {
    let k = dp[i];
    ans += Math.abs(a[i]);
    a[k] += a[i];
  }

  return ans;
}

// 시도 5 stack overflow : 7, 8, 16, 17
function solution(a, edges) {
  let s = 0,
    dp = [],
    n = a.length,
    line = [];
  for (let i = 0; i < n; i++) {
    s += a[i];
    dp[i] = i;
    line[i] = [];
  }
  if (s !== 0) {
    return -1;
  }
  for (let [i, j] of edges) {
    line[i].push(j);
    line[j].push(i);
  }

  function f(p, x) {
    let ans = 0;
    for (let j of line[x]) {
      let k = Number(j);
      if (k !== p) {
        let sub = f(x, k);
        ans += sub;
        a[x] += a[k];
        a[k] = 0;
      }
    }
    return ans + Math.abs(a[x]);
  }
  return f(-1, 0);
}

// 시도 4  => 풀이실패 :  8 , 시간 초과 : 13, 14, 18
// function solution(a, edges) {
//   let ans = 0,
//     p = 0,
//     m = 0,
//     dp = [],
//     n = a.length,
//     nf = [];
//   for (let i = 0; i < n; i++) {
//     if (a[i] < 0) {
//       m += a[i];
//     } else {
//       p += a[i];
//     }
//     dp[i] = { val: a[i], edges: [] };

//     nf[i] = i;
//   }
//   if (m + p !== 0) {
//     ans = -1;
//   } else if (m < 0) {
//     let max = 0;
//     for (let [i, j] of edges) {
//       dp[i].edges.push(j);
//       dp[j].edges.push(i);
//     }
//     let target = [];
//     for (let i = 0; i < n; i++) {
//       if (dp[i].edges.length === 1) {
//         target.push(i);
//       }
//     }
//     while (target.length > 0) {
//       let ntarget = [];
//       for (let i of target) {
//         if (dp[i].edges.length > 0) {
//           let k = dp[i].edges[0];
//           if (nf[k] === k) {
//             nf[i] = k;
//             ans += Math.abs(dp[i].val);
//             dp[k].val += dp[i].val;
//             dp[k].edges = dp[k].edges.filter((x) => x !== i);
//           }
//           if (dp[k].edges.length === 1) {
//             ntarget.push(k);
//           }
//         }
//       }
//       target = [...ntarget];
//     }
//   }

//   return ans;
// }

// 시도 3
// function solution(a, edges) {
//   let ans = 0,
//     p = 0,
//     m = 0,
//     dp = [],
//     n = a.length;
//   for (let i = 0; i < n; i++) {
//     if (a[i] < 0) {
//       m += a[i];
//     } else {
//       p += a[i];
//     }
//     dp[i] = { num: i, val: a[i], visit: false, edges: {}, count: 0 };
//   }
//   if (m + p !== 0) {
//     ans = -1;
//   } else if (m < 0) {
//     let max = 0;
//     for (let [i, j] of edges) {
//       dp[i].edges[j] = true;
//       dp[j].edges[i] = true;
//       dp[i].count++;
//       dp[j].count++;
//       max = dp[i].count > max ? dp[i].count : max;
//       max = dp[j].count > max ? dp[j].count : max;
//     }
//     let count = {};
//     for (let i in dp) {
//       let k = dp[i].count;
//       if (count[k] === undefined) {
//         count[k] = {};
//       }
//       count[k][i] = true;
//     }
//     let target = Object.keys(count[1]);
//     let k = 0;
//     while (target.length > 0) {
//       for (let i of target) {
//         k += Math.abs(dp[i].val);
//         for (let j in dp[i].edges) {
//           dp[j].val += dp[i].val;
//           dp[i].val = 0;
//           let c = dp[j].count;
//           dp[j].count--;
//           delete count[c][j];
//           if (c > 1) {
//             count[c - 1][j] = true;
//           }
//           delete dp[j].edges[i];
//         }
//         delete count[1][i];
//       }
//       target = Object.keys(count[1]);
//     }
//     ans = k;

//     //     function f( k) {

//     //         let target=Object.keys(count[1])
//     //         if (target.length === 0) {
//     //             return k;
//     //         }
//     //         for (let i of target) {
//     //             k+=Math.abs(dp[i].val)
//     //             for (let j in dp[i].edges){
//     //                 dp[j].val+=dp[i].val
//     //                 dp[i].val=0
//     //                 let c=dp[j].count
//     //                 dp[j].count--
//     //                 delete count[c][j]
//     //                 if (c >1){
//     //                     count[c-1][j]=true
//     //                 }
//     //                 delete dp[j].edges[i]
//     //             }
//     //             delete count[1][i]
//     //         }
//     //         return f( k);
//     //     }
//     //     ans = f( 0);
//   }

//   return ans;
// }

// 시도 2 (시도 1의 하위호환)
// function solution(a, edges) {
//   let ans = 0,
//     p = 0,
//     m = 0,
//     dp = [];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//       m += a[i];
//     } else {
//       p += a[i];
//     }
//     dp[i] = { num: i, val: a[i], visit: false, edges: [] };
//   }
//   if (m + p !== 0) {
//     ans = -1;
//   } else if (m < 0) {
//     for (let [i, j] of edges) {
//       dp[i].edges.push(j);
//       dp[j].edges.push(i);
//     }
//     function recon(k, db) {
//       let edges = dp[k].edges;
//       db[k] = true;
//       dp[k].edges = [];
//       if (edges.length > 1) {
//         for (let i of edges) {
//           if (db[i] === undefined) {
//             dp[k].edges.push(i);
//             recon(i, db);
//           }
//         }
//       }
//     }

//     function f(k) {
//       let ans = 0;
//       let edges = dp[k].edges;
//       for (let i of dp[k].edges) {
//         if (dp[i].edges.length > 1) {
//           ans += f(i);
//         }
//         ans += Math.abs(dp[i].val);
//         dp[k].val += dp[i].val;
//         dp[i].val = 0;
//       }
//       return ans;
//     }
//     recon(0, {});
//     ans = f(0);
//   }

//   return ans;
// }

//시도 1 (7, 8, 13, 14, 16, 17, 18 실패 )
// function solution(a, edges) {
//   let ans = 0,
//     p = 0,
//     m = 0,
//     dp = [],
//     target = {};
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] < 0) {
//       m += a[i];
//     } else {
//       p += a[i];
//     }
//     dp[i] = { num: i, val: a[i], visit: false, edges: [] };
//     target[i] = i;
//   }
//   if (m + p !== 0) {
//     ans = -1;
//   } else if (m < 0) {
//     for (let [i, j] of edges) {
//       dp[i].edges.push(j);
//       dp[j].edges.push(i);
//     }
//     function f(target, k) {
//       let arr = [];
//       for (let i in target) {
//         if (!dp[Number(i)].visit && dp[Number(i)].edges.length === 1) {
//           arr.push(Number(i));
//         }
//       }
//       if (arr.length === 0) {
//         return k;
//       }
//       for (let i of arr) {
//         dp[i].visit = true;
//         k += Math.abs(dp[i].val);
//         if (dp[i].edges.length > 0) {
//           let j = dp[i].edges[0];
//           dp[j].val += dp[i].val;
//           dp[i].val = 0;
//           dp[j].edges = dp[j].edges.filter((x) => x !== i);
//         }
//         delete target[i];
//       }
//       return f(target, k);
//     }
//     ans = f(target, 0);
//   }

//   return ans;
// }
