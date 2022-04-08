//표 편집
// 시도 6 풀이 완료
function solution(n, k, cmd) {
  let ans = Array(n).fill("O"),
    dp = [],
    r = [],
    min = 0,
    max = n - 1;
  for (let i = 0; i < n; i++) {
    dp.push([i === 0 ? 0 : i - 1, i === n - 1 ? n - 1 : i + 1]);
  }
  function up(x) {
    let a = k;
    for (let i = 0; i < x; i++) {
      if (a === dp[a][0]) {
        break;
      } else {
        a = dp[a][0];
      }
    }
    return a;
  }

  function down(x) {
    let a = k;
    for (let i = 0; i < x; i++) {
      if (a === dp[a][1]) {
        break;
      } else {
        a = dp[a][1];
      }
    }
    return a;
  }

  for (let i of cmd) {
    if (i.length > 1) {
      let [cmd, x] = i.split(" ");
      if (cmd === "U") {
        k = up(Number(x));
      } else {
        k = down(Number(x));
      }
    } else {
      if (i === "C") {
        ans[k] = "X";
        r.push([k, ...dp[k]]);
        if (k === min) {
          min = dp[k][1];
          dp[min][0] = min;
          k = min;
        } else if (k === max) {
          max = dp[k][0];
          dp[max][1] = max;
          k = max;
        } else {
          let [a, b] = dp[k];
          dp[a][1] = b;
          dp[b][0] = a;
          k = b;
        }
      } else {
        let [j, a, b] = r.pop();
        if (j < min) {
          dp[j] = [j, min];
          dp[min][0] = j;
          min = j;
        } else if (j > max) {
          dp[j] = [max, j];
          dp[max][1] = j;
          max = j;
        } else {
          dp[a][1] = j;
          dp[b][0] = j;
        }
        ans[j] = "O";
      }
    }
  }
  return ans.join("");
}
let values = [
  [8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"], "OOOOXOOO"],
  [
    8,
    2,
    ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z", "U 1", "C"],
    "OOXOXOOO",
  ],
];
for (let [n, k, cmd, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      n,
      k,
      cmd
    )}, expected_result : ${expected_result} `
  );
}

//시도 5 : min, max 지정으로 약간의 속도 향상
// function solution(n, k, cmd) {
//   let ans = Array(n).fill("O"),
//     r = [],
//     min = 0,
//     max = n - 1;
//   function up(x) {
//     let a = k;
//     if (a - x < min) {
//       return min;
//     }
//     while (a > 0 && x > 0) {
//       a--;
//       if (ans[a] === "O") {
//         x--;
//       }
//     }
//     return a;
//   }

//   function down(x) {
//     let a = k;
//     if (x + a > max) {
//       return max;
//     }
//     while (a < n - 1 && x > 0) {
//       a++;
//       if (ans[a] === "O") {
//         x--;
//       }
//     }
//     return a;
//   }

//   for (let i of cmd) {
//     if (i.length > 1) {
//       let [cmd, x] = i.split(" ");
//       if (cmd === "U") {
//         k = up(Number(x));
//       } else {
//         k = down(Number(x));
//       }
//     } else {
//       if (i === "C") {
//         ans[k] = "X";
//         r.push(k);
//         let nk = -1;
//         for (let j = k + 1; j < n; j++) {
//           if (ans[j] == "O") {
//             nk = j;
//             break;
//           }
//         }
//         if (nk === -1) {
//           for (let j = k - 1; j >= 0; j--) {
//             if (ans[j] == "O") {
//               nk = j;
//               break;
//             }
//           }
//         }

//         if (k === min) {
//           min = nk;
//         } else if (k === max) {
//           max = nk;
//         }
//         k = nk;
//       } else {
//         let j = r.pop();
//         if (j < min) {
//           min = j;
//         } else if (j > max) {
//           max = j;
//         }
//         ans[j] = "O";
//       }
//     }
//   }
//   return ans.join("");
// }

// 시도 4 : 정확도 풀이 완료 효율성 전반 풀이 시도 1보다 속도는 느려짐
// function solution(n, k, cmd) {
//   let ans = Array(n).fill("O"),
//     r = [];
//   function up(x) {
//     let a = k;

//     while (a > 0 && x > 0) {
//       a--;
//       if (ans[a] === "O") {
//         x--;
//       }
//     }
//     return a;
//   }

//   function down(x) {
//     let a = k;

//     while (a < n - 1 && x > 0) {
//       a++;
//       if (ans[a] === "O") {
//         x--;
//       }
//     }
//     return a;
//   }

//   for (let i of cmd) {
//     if (i.length > 1) {
//       let [cmd, x] = i.split(" ");
//       if (cmd === "U") {
//         k = up(Number(x));
//       } else {
//         k = down(Number(x));
//       }
//     } else {
//       if (i === "C") {
//         ans[k] = "X";
//         r.push(k);
//         let nk = -1;
//         for (let j = k + 1; j < n; j++) {
//           if (ans[j] == "O") {
//             nk = j;
//             break;
//           }
//         }
//         if (nk === -1) {
//           for (let j = k - 1; j >= 0; j--) {
//             if (ans[j] == "O") {
//               nk = j;
//               break;
//             }
//           }
//         }
//         k = nk;
//       } else {
//         let j = r.pop();
//         ans[j] = "O";
//       }
//     }
//   }
//   return ans.join("");
// }

// 시도 3 : 시도 1보다는 좋은 정확성을 보이나 효율성은 더 나빠진 코드
// function solution(n, k, cmd) {
//   let ans = Array(n).fill("O"),
//     r = [];

//   function leng(a) {
//     let b = k;
//     if (a > k) {
//       [a, b] = [k, a];
//     }
//     let l = b - a,
//       c = 0;
//     for (let i of r) {
//       if (i >= a && i < b) {
//         c--;
//       }
//     }
//     return l + c;
//   }

//   function up(x) {
//     let [a, b] = [0, k];
//     while (a < b) {
//       let m = Math.floor((a + b) / 2);
//       let u = leng(m);
//       if (u > x) {
//         a = m + 1;
//       } else if (u < x) {
//         b = m;
//       } else {
//         a = m;
//         b = m;
//       }
//     }

//     return a;
//   }

//   function down(x) {
//     let [a, b] = [k, n - 1];
//     while (a < b) {
//       let m = Math.floor((a + b) / 2);
//       let u = leng(m);
//       if (u > x) {
//         b = m;
//       } else if (u < x) {
//         a = m + 1;
//       } else {
//         a = m;
//         b = m;
//       }
//     }
//     return a;
//   }

//   for (let i of cmd) {
//     if (i.length > 1) {
//       let [cmd, x] = i.split(" ");
//       if (cmd === "U") {
//         k = up(Number(x));
//       } else {
//         k = down(Number(x));
//       }
//     } else {
//       if (i === "C") {
//         ans[k] = "X";
//         r.push(k);
//         let nk = -1;
//         for (let j = k + 1; j < n; j++) {
//           if (ans[j] == "O") {
//             nk = j;
//             break;
//           }
//         }
//         if (nk === -1) {
//           for (let j = k - 1; j >= 0; j--) {
//             if (ans[j] == "O") {
//               nk = j;
//               break;
//             }
//           }
//         }
//         k = nk;
//       } else {
//         let j = r.pop();
//         ans[j] = "O";
//       }
//     }
//   }
//   return ans.join("");
// }

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

// 시도 1 조금의 정확성을 통과하고 상당수의 효율성을 통과한 코드
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
