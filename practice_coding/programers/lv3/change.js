// 거스름 돈
// 시도 중
function solution(n, money) {
  let db = {},
    l = money.length;
  money.sort((a, b) => a - b);
  function f(c, k) {
    let ans = 0;
    if (c < money[0] || (k === 0 && c % money[k] !== 0)) {
      db[`${c}-${k}`] = 0;
    } else if (db[`${c}-${k}`] === undefined) {
      for (let i = k; i >= 0; i--) {
        if (c - money[i] > 0) {
          ans += f(c - money[i], i);
        } else if (c === money[i]) {
          ans++;
        }
      }
      db[`${c}-${k}`] = ans;
    } else {
      ans += db[`${c}-${k}`];
    }

    return ans;
  }

  let ans = f(n, l - 1);
  return ans;
}
//시도 1
// function solution(n, money) {
//     let ans = 0,i=0,l=money.length;
//     money.sort((a,b)=>b-a)
//     function f(n,i){
//         if (i ===l-1){
//             return n%money[l-1]===0? 1:0;
//         }
//         let ans=0
//         let k=Math.floor(n/money[i])
//         for (let j=0;j<k+1;j++){
//             let nn=n-(j*money[i])
//             if (nn >0){
//                     let sub=f(nn,i+1)
//                     ans+=sub
//             }else{
//                 ans++
//             }
//         }
//         return ans
//     }
//     return f(n,i)%1000000007;
// }
