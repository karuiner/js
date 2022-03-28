//섬 연결하기

// 시도 2
function solution(n, costs) {
  let db = {};
  for (let [i, j, c] of costs) {
    if (db[i] === undefined) {
      db[i] = {};
    }

    if (db[i][j] === undefined) {
      db[i][j] = c;
    }

    if (db[j] === undefined) {
      db[j] = {};
    }

    if (db[j][i] === undefined) {
      db[j][i] = c;
    }
  }

  let ans = Infinity;
  for (let i = 0; i < n; i++) {
    let c = 0,
      ck = {};
    function f(id, s) {
      let ans = 0,
        ns = s;
      c++;
      ck[id] = true;
      if (c === n) {
        return s;
      }
      let entries = Object.entries(db[id]);
      entries.sort((a, b) => a[1] - b[1]);
      for (let [nid, nv] of entries) {
        if (ck[nid] === undefined) {
          let sub = f(nid, ns + nv);
          if (c === n) {
            ans = sub;
          } else {
            ns = sub;
          }
        }
      }
      return c < n ? ns : ans;
    }
    let cc = f(i, 0);

    if (cc < ans) {
      ans = cc;
    }
  }

  return ans;
}

// 시도 1
// 한 노드에서 하나의 연결점을 가진다는 가정하에 구성된 코드이기에 한계를 가짐.

// function solution(n, costs) {
//     let db={}
//     for (let [i,j,c] of costs){
//         if (db[i]===undefined){
//             db[i]={}
//         }

//         if (db[i][j]===undefined){
//             db[i][j]=c
//         }

//         if (db[j]===undefined){
//             db[j]={}
//         }

//         if (db[j][i]===undefined){
//             db[j][i]=c
//         }
//     }
//     function f(s, c,sum,select){
//         let next=Infinity,v=Infinity
//         for (let i in db[s]){
//             if (select[Number(i)]&&db[s][i]<v){
//                 next=i
//                 v=db[s][i]
//             }
//         }
//         if (c<n){
//             select[Number(s)]=false
//             return f(next,c+1,sum+v,select)
//         }else{

//             return [sum,c]
//         }
//     }
//     let ans=Infinity
//     for (let i =0; i <n ; i++){
//         let select=Array(n).fill(true)
//         select[i]=false
//         let [sub,count]=f(i,1,0,select)
//         if (sub <ans&& count===n){
//             ans=sub
//         }
//     }

//     return ans;
// }
