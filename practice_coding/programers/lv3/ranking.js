// 순위

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
