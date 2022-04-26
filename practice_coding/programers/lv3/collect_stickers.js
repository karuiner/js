// 스티커 수집

// 시도 2 중복되는 구간 스킵
function solution(sticker) {
  let n = sticker.length,
    db = {};
  //dp문제 뽑느냐 마느냐

  function f(s, e, k) {
    if (s > e) {
      return k;
    }
    if (db[`${s}-${e}`] === undefined) {
      let ans = f(s + 2, e, k + sticker[s]);
      let sub = f(s + 1, e, k);
      ans = ans > sub ? ans : sub;
      db[`${s}-${e}`] = ans - k;
      return ans;
    } else {
      return k + db[`${s}-${e}`];
    }
  }
  if (n === 1) {
    return sticker[0];
  }
  let ans = f(0, n - 2, 0);
  let sub = f(1, n - 1, 0);

  return ans > sub ? ans : sub;
}

// 시도 1 재귀 함수를 사용한 풀이.
// function solution(sticker) {
//     let n=sticker.length;
//     //dp문제 뽑느냐 마느냐

//     function f(s,e,k){
//         if (s >e){
//             return k
//         }
//         let ans=f(s+2,e,k+sticker[s])
//         let sub=f(s+1,e,k)

//         return ans>sub?ans:sub
//     }
//     if (n===1){
//         return sticker[0]
//     }
//     let ans=f(0,n-2,0)
//     let sub=f(1,n-1,0)

//     return ans>sub?ans:sub
// }
