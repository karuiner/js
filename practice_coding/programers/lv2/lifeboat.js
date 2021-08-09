// function solution(people, limit) {
//     people.sort((a,b)=>b-a)
//     let ans=0,n=people.length
//     while (n >0){
//         if ((people[0] +people[n-1])<= limit ){
//             people=people.slice(1,-1)
//             n-=2
//         }else {
//             people=people.slice(1)
//             n-=1
//         }
//         ans++
//     }
//     return ans;
// }
// 정확도 완료

function solution(people, limit) {
  let db = {};
  people.forEach((x) => {
    if (db[x]) {
      db[x] += 1;
    } else {
      db[x] = 1;
    }
  });
  let x = Object.keys(db);
  x = x.map(Number);
  x.sort((a, b) => {
    return b - a;
  });
  let ans = 0,
    n = x.length;
  while (n > 0) {
    if (n > 1 && x[0] + x[n - 1] <= limit) {
      if (db[x[0]] > db[x[n - 1]]) {
        ans += db[x[n - 1]];
        db[x[0]] -= db[x[n - 1]];
        x = x.slice(0, -1);
        n -= 1;
      } else if (db[x[0]] < db[x[n - 1]]) {
        ans += db[x[0]];
        db[x[n - 1]] -= db[x[0]];
        x = x.slice(1);
        n -= 1;
      } else {
        ans += db[x[0]];
        x = x.slice(1, -1);
        n -= 2;
      }
    } else {
      if (2 * x[0] <= limit) {
        let k = Math.floor(db[x[0]] / 2);
        ans += db[x[0]] % 2 ? k + 1 : k;
      } else {
        ans += db[x[0]];
      }
      x = x.slice(1);
      n -= 1;
    }
  }
  return ans;
}

let people = [50, 70, 80, 50],
  limit = 100;
console.log(solution(people, limit)); //3
