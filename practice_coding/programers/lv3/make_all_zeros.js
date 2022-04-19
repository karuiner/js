//모두 0으로 만들기

// 시도 2 (시도 1의 하위호환)
function solution(a, edges) {
  let ans = 0,
    p = 0,
    m = 0,
    dp = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      m += a[i];
    } else {
      p += a[i];
    }
    dp[i] = { num: i, val: a[i], visit: false, edges: [] };
  }
  if (m + p !== 0) {
    ans = -1;
  } else if (m < 0) {
    for (let [i, j] of edges) {
      dp[i].edges.push(j);
      dp[j].edges.push(i);
    }
    function recon(k, db) {
      let edges = dp[k].edges;
      db[k] = true;
      dp[k].edges = [];
      if (edges.length > 1) {
        for (let i of edges) {
          if (db[i] === undefined) {
            dp[k].edges.push(i);
            recon(i, db);
          }
        }
      }
    }

    function f(k) {
      let ans = 0;
      let edges = dp[k].edges;
      for (let i of dp[k].edges) {
        if (dp[i].edges.length > 1) {
          ans += f(i);
        }
        ans += Math.abs(dp[i].val);
        dp[k].val += dp[i].val;
        dp[i].val = 0;
      }
      return ans;
    }
    recon(0, {});
    ans = f(0);
  }

  return ans;
}

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
