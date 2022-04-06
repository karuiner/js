//표 편집

//시도 2 더 좋지 못한 결과를 가짐
// function solution(n, k, cmd) {
//     let ans=Array(n).fill('O'),dp=[], r=[],min=0,max=n-1
//     for (let i =0; i <n;i++){
//         let [a,b]=[i-1<0?0:i-1,i+1<n?i+1:n-1]
//         dp[i]=[a,b]
//     }
//     function move(cmd,x){
//         let i=cmd==='U'?0:1
//         while (x>0){
//             k=dp[k][i]
//             x--
//         }
//     }
//     function rm(k){
//         let [a,b]=dp[k],ik=k+1
//         if (a===k){
//             dp[b][0]=b
//             min=b
//         }else if (b===k){
//             dp[a][1]=a
//             max=a
//             ik=k-1
//         }else{
//             dp[a][1]=b
//             dp[b][0]=a
//         }
//         ans[k]='X'
//         r.push(k)
//         k=ik
//     }

//     function res(){
//         let x=r.pop()
//         if (x <min){
//             dp[min][0]=x
//             dp[x]=[x,min]
//             min=x
//         }else if (x> max){
//             dp[max][1]=x
//             dp[x]=[max,x]
//             max=x
//         }else{
//             let q=x
//             while (ans[q]==='X'){
//                q--
//             }
//             let b=dp[q][1]
//             dp[q][1]=x
//             dp[x]=[q,b]
//             dp[b][0]=x
//         }
//         ans[x]='O'
//     }

//     for (let i of cmd){
//         if (i.length >1){
//             let [a,b]=i.split(' ')
//             move(a,b)
//         }else if (i==='C'){
//             rm(k)
//         }else{
//             res()
//         }
//     }

//     return ans.join("")
// }

// 시도 1
// function solution(n, k, cmd) {
//     let ans = Array(n).fill('O'),d=[];
//     function f(k,cmd,x){
//         let dx=cmd==='D'?1:-1
//         while(x>0){
//             if (ans[k]==='O'){
//                 x--
//             }else if (ans[k]===undefined){
//                 break
//             }
//             k+=dx
//         }
//         if (k <0){
//             k=0
//         }else if (k >=n){
//             k=n-1
//         }

//         return k
//     }
//     for (let i of cmd){
//         let l=i.length
//         if (l===1){
//             if (i==='C'){
//                 ans[k]='X'
//                 d.push(k)
//                 let dk=k+1
//                 while (dk<n){
//                     if (ans[dk]==='O'){
//                         break
//                     }
//                     dk++
//                 }
//                 if (dk>=n){
//                     dk=k-1
//                     while (dk>0){
//                         if (ans[dk]==='O'){
//                             break
//                         }
//                         dk--
//                     }
//                 }
//                 k=dk
//             }else{
//                 let nk=d.pop()
//                 ans[nk]='O'
//             }
//         }else{
//             let [x,c]=i.split(' ')
//             k=f(k,x,Number(c))
//         }

//     }

//     return ans.join('');
// }
