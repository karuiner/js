// 순위

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
