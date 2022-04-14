//110 옮기기

// 시도 1
// function solution(s) {
//     let ans = [];

//     function geti(s){
//         let n=s.length,ans=[]
//         for (let i=0; i <n-2;i++ ){
//             if (s.slice(i,i+3)==='110'){
//                     ans.push(i)
//             }
//         }
//         return ans
//     }
//     function f(s){
//         let ans='',n=s.length
//         for (let i=0;i <n+1;i++){
//             let ns=s.slice(0,i)+'110'+s.slice(i)
//             if (ans.length ===0){
//                 ans=ns
//             }else if (ns<ans){
//                 ans=ns
//             }
//         }
//         return ans
//     }
//     function check(s){
//         let  idx=geti(s),ans=s
//         if (idx.length>0){
//             for (let i of idx){
//                 let ns=s.slice(0,i)+s.slice(i+3)
//                 let sub=f(ns)
//                 if (sub<ans){
//                     ans=sub
//                 }
//             }
//         }

//             return ans

//     }

//     for (let i of s){
//         let sub=check(i)
//         while (sub <i){
//             i=sub
//             sub=check(i)
//         }
//         ans.push(sub)
//     }

//     return ans;
// }
