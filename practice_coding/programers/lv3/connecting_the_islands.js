//섬 연결하기

//시도 4  모든 경우의수 따지기 - 느리다
function solution(n, costs) {
  let db = {};
  for (let [i, j, c] of costs) {
    if (db[i] === undefined) {
      db[i] = {};
    }
    if (db[j] === undefined) {
      db[j] = {};
    }
    db[i][j] = c;
    db[j][i] = c;
  }
  function f(dp, s) {
    let rt = [],
      ans = Infinity;
    for (let i = 0; i < n; i++) {
      if (dp[i]) {
        for (let j in db[i]) {
          if (!dp[Number(j)]) {
            rt.push([j, db[i][j]]);
          }
        }
      }
    }
    if (rt.length === 0) {
      return s;
    }
    for (let [j, v] of rt) {
      let sub = [...dp];

      sub[Number(j)] = true;
      let rt = f(sub, s + v);
      if (rt < ans) {
        ans = rt;
      }
    }
    return ans;
  }
  let dp = Array(n).fill(false),
    ans = Infinity;
  for (let i = 0; i < n; i++) {
    let sub = [...dp];
    sub[Number(i)] = true;

    let rst = f([...sub], 0);
    if (rst < ans) {
      ans = rst;
    }
  }

  return ans;
}

// 시도 3 - 미완성
// function solution(n, costs) {
//   let db = {};
//   for (let [i, j, c] of costs) {
//     if (db[i] === undefined) {
//       db[i] = {};
//     }

//     if (db[i][j] === undefined) {
//       db[i][j] = c;
//     }

//     if (db[j] === undefined) {
//       db[j] = {};
//     }

//     if (db[j][i] === undefined) {
//       db[j][i] = c;
//     }
//   }

//   let ans = Infinity;
//   for (let i = 0; i < n; i++) {
//     let c = 0,
//       ck = {};
//     function f(id, s, c) {
//       let ans = Infinity;
//       c++;
//       ck[id] = true;
//       if (c === n) {
//         return s;
//       }
//       let entries = Object.entries(db[id]);
//       let l = entries.length;
//       entries.sort((a, b) => a[1] - b[1]);
//       for (let i = 0; i < l; i++) {
//         let ns = s;
//         for (let j = i; j < l; j++) {
//           let [nid, nv] = entries[j];

//           let sub = f(nid, ns + nv);
//           ns = sub;
//           if (c === n) {
//             break;
//           }
//         }

//         if (ns < ans) {
//           ans = ns;
//         }
//       }
//       return ans;
//     }
//     let cc = f(i, 0);

//     if (cc < ans) {
//       ans = cc;
//     }
//   }

//   return ans;
// }

// 시도 2
// function solution(n, costs) {
//   let db = {};
//   for (let [i, j, c] of costs) {
//     if (db[i] === undefined) {
//       db[i] = {};
//     }

//     if (db[i][j] === undefined) {
//       db[i][j] = c;
//     }

//     if (db[j] === undefined) {
//       db[j] = {};
//     }

//     if (db[j][i] === undefined) {
//       db[j][i] = c;
//     }
//   }

//   let ans = Infinity;
//   for (let i = 0; i < n; i++) {
//     let c = 0,
//       ck = {};
//     function f(id, s) {
//       let ans = 0,
//         ns = s;
//       c++;
//       ck[id] = true;
//       if (c === n) {
//         return s;
//       }
//       let entries = Object.entries(db[id]);
//       entries.sort((a, b) => a[1] - b[1]);
//       for (let [nid, nv] of entries) {
//         if (ck[nid] === undefined) {
//           let sub = f(nid, ns + nv);
//           if (c === n) {
//             ans = sub;
//           } else {
//             ns = sub;
//           }
//         }
//       }
//       return c < n ? ns : ans;
//     }
//     let cc = f(i, 0);

//     if (cc < ans) {
//       ans = cc;
//     }
//   }

//   return ans;
// }

// 시도 1
// 한 노드에서 하나의 연결점을 가진다는 가정하에 구성된 코드이기에 한계를 가짐.

// function solution(n, costs) {
//     let db={}
//     for (let [i,j,c] of costs){
//         if (db[i]===undefined){
//             db[i]={}
//         }

//         if (db[i][j]===undefined){
//             db[i][j]=c
//         }

//         if (db[j]===undefined){
//             db[j]={}
//         }

//         if (db[j][i]===undefined){
//             db[j][i]=c
//         }
//     }
//     function f(s, c,sum,select){
//         let next=Infinity,v=Infinity
//         for (let i in db[s]){
//             if (select[Number(i)]&&db[s][i]<v){
//                 next=i
//                 v=db[s][i]
//             }
//         }
//         if (c<n){
//             select[Number(s)]=false
//             return f(next,c+1,sum+v,select)
//         }else{

//             return [sum,c]
//         }
//     }
//     let ans=Infinity
//     for (let i =0; i <n ; i++){
//         let select=Array(n).fill(true)
//         select[i]=false
//         let [sub,count]=f(i,1,0,select)
//         if (sub <ans&& count===n){
//             ans=sub
//         }
//     }

//     return ans;
// }
