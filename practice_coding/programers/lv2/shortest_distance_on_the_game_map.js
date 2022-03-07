//게임 맵 최단거리

function solution(maps) {
  let n = maps.length,
    m = maps[0].length;
  let l = n * m;
  let dp = Array(l).fill(Infinity);
  let target = [0];
  function step(target, s) {
    let ntarget = [];
    for (let k of target) {
      // 아직 미탐험지역이거나 탐험 지역이어도 해당 스텝 값보다 현재 스템값이 작을 경우
      if (dp[k] === Infinity || (dp[k] !== Infinity && dp[k] > s)) {
        dp[k] = s;
        let [i, j] = [Math.floor(k / m), k % m];
        if (i > 0 && maps[i - 1][j] !== 0) {
          ntarget.push(k - m);
        }
        if (i < n - 1 && maps[i + 1][j] !== 0) {
          ntarget.push(k + m);
        }
        if (j > 0 && maps[i][j - 1] !== 0) {
          ntarget.push(k - 1);
        }
        if (j < m - 1 && maps[i][j + 1] !== 0) {
          ntarget.push(k + 1);
        }
      }
    }
    if (ntarget.length > 0) {
      step(ntarget, s + 1);
    }
  }
  step(target, 1);

  return dp[l - 1] === Infinity ? -1 : dp[l - 1];
}

// function solution(maps) {
//     var ans = 0, n=maps.length,m=maps[0].length ;
//     function f(i,j,k){
//         let ans=-1
//         if (maps[i][j]<0&&maps[i][j]> k-1) {
//             k=maps[i][j]
//         }else{
//             maps[i][j]=k-1
//         }

//         if (i ===n-1&& j ===m-1){
//             return -k
//         }
//         function get(ans,sub){
//             if (sub >0&& ans <0){
//                 ans=sub
//             }else if (sub>0 && ans>0){
//                 ans=ans<sub?ans:sub
//             }
//             return ans
//         }

//         if (i>0&&maps[i-1][j]!==0&&maps[i-1][j]<k-1){
//             let sub=f(i-1,j,k-1)
//             ans=get(ans,sub)
//         }
//         if (i <n-1&&maps[i+1][j]!==0&&maps[i+1][j]<k-1){
//             let sub=f(i+1,j,k-1)
//             ans=get(ans,sub)
//         }
//         if (j >0&&maps[i][j-1]!==0&&maps[i][j-1]<k-1){
//             let sub=f(i,j-1,k-1)
//             ans=get(ans,sub)
//         }
//         if (j <m-1&&maps[i][j+1]!==0&&maps[i][j+1]<k-1){
//             let sub=f(i,j+1,k-1)
//                 ans=get(ans,sub)
//         }
//         return ans
//     }
//     console.log(f(0,0,0))
//     console.log(maps)

//     return ans;
// }

// function solution(maps) {
//     var n=maps.length,m=maps[0].length ;
//     let stack=[[0,0]],k=1
//     while (stack.length >0&& k <20){
//         let sub=[]
//         for (let [i,j] of stack){
//             maps[i][j]=k
//             if (maps[i-1]!==undefined&&maps[i-1][j]===1){
//                 sub.push([i-1,j])
//             }
//             if (maps[i+1]!==undefined&&maps[i+1][j]===1){
//                 sub.push([i+1,j])
//             }
//             if (maps[i][j-1]!==undefined&&maps[i][j-1]===1){
//                 sub.push([i,j-1])
//             }
//             if (maps[i][j+1]!==undefined&&maps[i][j+1]===1){
//                 sub.push([i,j+1])
//             }

//         }
//         stack=[...sub]
//         k++
//     }
//     let ans=maps[n-1][m-1]

//     return ans >1?ans:-1;
// }

// function solution(maps){
//     let n=maps.length, m=maps[0].length
//     let l=n*m
//     let dp=Array(l).fill(Infinity)
//     let sel=[0],c=1
//     function f(i,j){
//         let rs= (n-1-i)**2 +(m-1-j)**2
//         return rs
//     }

//     while (sel.length>0){
//         let nsel=[]
//         for (let k of sel){
//             if (dp[k]>c){
//                 dp[k]=c
//             }
//             if (dp[l-1]!== Infinity){
//                 break
//             }
//             let [i,j]=[Math.floor(k/m),k%m],u=0
//             if (i>1){
//                 u=((i-1)*m)+j
//                 if (maps[i-1][j]!==0&& dp[u]>c ){
//                     nsel.push(u)
//                 }
//             }

//             if (i<n-1){
//                 u=((i+1)*m)+j
//                 if (maps[i+1][j]!==0&& dp[u]>c){
//                     nsel.push(u)
//                 }
//             }

//             if (j>1){
//                 u=(i*m)+j-1
//                 if (maps[i][j-1]!==0&& dp[u]>c){
//                     nsel.push(u)
//                 }
//             }

//             if (j<m-1){
//                 u=((i)*m)+j+1
//                 if (maps[i][j+1]!==0&& dp[u]>c){
//                     nsel.push(u)
//                 }
//             }
//         }
//         if (dp[l-1]!== Infinity){
//             break
//         }
//         sel=[...nsel]
//         c++
//     }
//     return dp[l-1]===Infinity?-1: dp[l-1]
// }

// function solution(maps) {
//   let n = maps.length,
//     m = maps[0].length;
//   let l = n * m;
//   let dp = Array(l).fill(Infinity);
//   let sel = [0],
//     c = 1;
//   function f(i, j) {
//     let rs = (n - 1 - i) ** 2 + (m - 1 - j) ** 2;
//     return rs;
//   }

//   while (sel.length > 0) {
//     let nsel = [];
//     for (let k of sel) {
//       if (dp[k] > c) {
//         dp[k] = c;
//       }
//       if (dp[l - 1] !== Infinity) {
//         break;
//       }
//       let [i, j] = [Math.floor(k / m), k % m],
//         u = 0;
//       if (i > 1) {
//         u = (i - 1) * m + j;
//         if (maps[i - 1][j] !== 0 && dp[u] > c) {
//           nsel.push(u);
//         }
//       }

//       if (i < n - 1) {
//         u = (i + 1) * m + j;
//         if (maps[i + 1][j] !== 0 && dp[u] > c) {
//           nsel.push(u);
//         }
//       }

//       if (j > 1) {
//         u = i * m + j - 1;
//         if (maps[i][j - 1] !== 0 && dp[u] > c) {
//           nsel.push(u);
//         }
//       }

//       if (j < m - 1) {
//         u = i * m + j + 1;
//         if (maps[i][j + 1] !== 0 && dp[u] > c) {
//           nsel.push(u);
//         }
//       }
//     }
//     if (dp[l - 1] !== Infinity) {
//       break;
//     }
//     sel = [...nsel];
//     c++;
//   }

//   return dp[l - 1] === Infinity ? -1 : dp[l - 1];
// }
