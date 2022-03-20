// 보석 쇼핑

// 풀이 시도 3 [정확성: 33.3, 효율성: 13.3, 합계: 46.7 / 100.0] 정확성 15/15 효율성 3/15
function solution(gems) {
  let key = {},
    nkey = 0,
    n = gems.length;
  for (let i = 0; i < n; i++) {
    let u = gems[i];
    if (key[u] === undefined) {
      key[u] = [i];
      nkey++;
    } else {
      key[u].push(i);
    }
  }
  let ans = [];
  function get(arr, k) {
    let [a, b] = [0, arr.length - 1];
    if (arr[a] >= k) {
      return arr[a];
    } else if (arr[b] < k) {
      return -1;
    } else {
      let c = 0;
      while (a < b && c < 20) {
        let m = Math.floor((a + b) / 2);
        if (arr[m] >= k) {
          b = m;
        } else {
          a = m + 1;
        }
        c++;
      }
      return arr[a];
    }
  }

  if (nkey > 1) {
    for (let i in key) {
      key[i].sort((a, b) => a - b);
    }
    let l = n;
    for (let i = 0; i < n; i++) {
      let k = 0,
        e = i;
      for (let j in key) {
        let u = get(key[j], i);
        if (u === -1) {
          break;
        } else if (u > e) {
          e = u;
        }
        k++;
      }

      if (k === nkey) {
        if (e - i < l) {
          l = e - i;
          ans = [i + 1, e + 1];
        } else if (e - i === l && i + 1 < ans[0]) {
          ans = [i + 1, e + 1];
        }
      } else {
        break;
      }
    }
  } else {
    ans = [1, 1];
  }
  return ans;
}

//풀이 시도 1
// function solution(gems) {
//     let key={},nkey=0,n=gems.length
//     for (let i of gems){
//         if (key[i]===undefined){
//             key[i]=1
//             nkey++
//         }else{
//             key[i]
//         }
//     }
//     function f(db,arr){//arr=[s,l] s:start_index, l=length
//         let [s,l]=arr

//         if (db[gems[s+l]]===undefined){
//             db[gems[s+l]]=true
//         }
//         let keys=Object.keys(db).length
//         if (keys<nkey){
//             if (s+l+1 <n){
//                 return f(db,[s,l+1])
//             }else{
//                 return [s,-1]
//             }
//         }else{
//             return [s,l]
//         }
//     }
//     let ans=[1,n]
//     if (nkey >1){
//         for (let i =0; i<(n-nkey);i++){
//             let [s,l]=f({},[i,0])
//             let sl=ans[1]-ans[0]+1
//             if (l >0 ){
//                 if (l+1 <sl){
//                     ans=[s+1,s+l+1]

//                 }else if (l+1===sl && s+1<ans[0]){
//                     ans=[s+1,s+l+1]
//                 }
//             }
//         }
//     }else{
//         ans=[1,1]
//     }

//     return ans;
// }
// 풀이 시도 2
// function solution(gems) {
//     let key={},nkey=0,n=gems.length
//     for (let i of gems){
//         if (key[i]===undefined){
//             key[i]=1
//             nkey++
//         }else{
//             key[i]
//         }
//     }
//     let ans=[0,n-1]
//     if (nkey > 1){
//     let [s,e]=[0,n-1]
//     for (let i=n-1; i >=s; i--){

//         if (key[gems[i]]>1){
//             key[gems[i]]--
//         }else{
//             e=i
//             break
//         }
//     }

//     for (let i=0; i <e; i++){
//         if (key[gems[i]]>1){
//             key[gems[i]]--
//         }else{
//             s=i
//             break
//         }
//     }
//         ans=[s+1,e+1]

//     }else{
//         ans=[1,1]
//     }

//     return ans;
// }
