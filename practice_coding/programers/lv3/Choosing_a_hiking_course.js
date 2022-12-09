//등산 코스 정하기

// 코드 작성중
// function solution(n, paths, gates, summits) {
//     let answer = [],db={};

//     for (let [i,j,c]of paths){
//         if (!db[i]){
//             db[i]={}
//         }
//         db[i][j]=c
//         if (!db[j]){
//             db[j]={}
//         }
//         db[j][i]=c
//     }
//     console.log(db)
//     function f(s,k,arr,check,inten){
//         let ans=Infinity,sub=[]
//         for (let i in db[k]){
//             let q=Number(i)
//             sub.push([q,db[k][q],arr[q-1]])
//         }
//         sub.sort((a,b)=> a[2]-b[2]===0?a[1]-b[1]:a[2]-b[2])
//         if (check){
//             let ban=[...summits,...gates.filter(x=>x!==s)]
//             for (let [i,j,k] of sub){
//                 if (!ban.includes(i)){
//                     if (i !== s){
//                         let narr=[...arr]
//                         narr[i-1]++
//                         let sub=f(s,i,narr,check,k >inten?k:inten)
//                         ans=sub[0]>ans:sub[0]
//                     }

//                 }
//             }
//         }

//         console.log(sub)
//     }
//     let arr=Array(n).fill(0)
//     f(gates[0],gates[0],arr)

//     return answer;
// }
