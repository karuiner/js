// 순위 검색

// function solution(info, query) {
//     let db={}
//     let keys = [
//         ["-","cpp", "java", "python"],
//         ["-","backend", "frontend"],
//         ["-","junior", "senior"],
//         ["-","chicken", "pizza"],
//         ]
//     function mkdb(db,i){
//         if (i <3){
//             for (let k of keys[i]){
//                 db[k]={}
//                 mkdb(db[k],i+1)
//             }

//         }else{
//             for (let k of keys[i]){
//                 db[k]=[]
//             }

//         }
//     }
//     mkdb(db,0)
//     function input(db,sub,i){
//         if (i <3){
//             for (let key in db){
//                 if (sub[i]===key||key==='-'){
//                     input(db[key],sub,i+1)
//                 }
//             }
//         }else{
//             for (let key in db){
//                 if (sub[i]===key||key==='-'){
//                     db[key].push(Number(sub[i+1]))
//                 }
//             }
//         }
//     }
//     function get(arr, k){
//         let n=arr.length
//         let a=0,b=n-1
//         if (arr[a]>=k){
//             return n
//         }else if (k >arr[b]){
//             return 0
//         }
//         if (n <20){
//         let c=0
//         for (let i=0 ; i <n; i++){
//             if (arr[i] >=k){
//                c=i
//                 break
//             }
//         }
//         return n-c

//         }else{
//             while (a<b){
//                 let m=Math.floor((a+b)/2)
//                 if (arr[m] <k){
//                     a=m+1
//                 }else{
//                     b=m
//                 }
//             }
//         return n-a
//         }

//     }

//     for (let i of info){
//         let sub=i.split(' ')
//         input(db,sub,0)

//     }
//     let ans=[]
//     for (let i of query){
//         let keys=i.split(' ').filter(x=>x!=='and')
//         let arr=db[keys[0]][keys[1]][keys[2]][keys[3]]
//         arr.sort((a,b)=>a-b)
//         let k=get(arr,Number(keys[4]))
//         ans.push(k)
//     }

//     return ans

// }

function solution(info, query) {
  let db = [
    ["cpp", "java", "python"],
    ["backend", "frontend"],
    ["junior", "senior"],
    ["chicken", "pizza"],
  ];
  let keyv = {
    cpp: 0,
    java: 8,
    python: 16,
    backend: 0,
    frontend: 4,
    junior: 0,
    senior: 2,
    chicken: 0,
    pizza: 1,
  };
  function get(arr, k) {
    let n = arr.length;
    let a = 0,
      b = n - 1;
    if (arr[a] >= k) {
      return n;
    } else if (k > arr[b]) {
      return 0;
    }
    if (n < 20) {
      let c = 0;
      for (let i = 0; i < n; i++) {
        if (arr[i] >= k) {
          c = i;
          break;
        }
      }
      return n - c;
    } else {
      while (a < b) {
        let m = Math.floor((a + b) / 2);
        if (arr[m] < k) {
          a = m + 1;
        } else {
          b = m;
        }
      }
      return n - a;
    }
  }
  let ldb = {};
  let keys = db.reduce(function (acc, v) {
    if (acc.length === 0) {
      return v;
    } else {
      return acc.reduce((x, y) => {
        return x.concat(
          ...v.map((k) => {
            return [y, k].join(" ");
          })
        );
      }, []);
    }
  }, []);
  keys.forEach((x) => {
    ldb[x] = [];
  });
  info.map(function (v) {
    let ay = v.split(" ");
    let nkey = ay.slice(0, -1).join(" ");
    let score = ay.slice(-1)[0];
    ldb[nkey].push(score);
  });
  return query.map((x) => {
    let ck = x.split(" ").reduce(function (x, y) {
      return y !== "and" ? x.concat(y) : x;
    }, []);
    let nkey = ck.slice(0, -1).join(" ");
    let score = ck.slice(-1)[0];
    let ans = ldb[nkey] || false;
    if (!ans) {
      let tkey = ck.slice(0, -1);
      let target = tkey.reduce((acc, x, i) => {
        x = x === "-" ? db[i] : [].concat(x);
        if (acc.length > 0) {
          acc = acc.reduce((accx, accy) => {
            return accx.concat(x.map((xx) => accy + Number(keyv[xx])));
          }, []);
        } else {
          acc = x.map((xx) => Number(keyv[xx]));
        }
        return acc;
      }, []);
      ans = target.reduce((x, y) => {
        return x.concat(ldb[keys[y]]);
      }, []);
    }
    ans.sort((a, b) => a - b);

    //        ans = ans.filter((x) => Number(x) >= Number(score)).length;
    return get(ans, Number(score));
  });
}
