// 여행 경로

//풀이 완료
function solution(tickets) {
  let ans = [],
    db = {},
    n = tickets.length,
    dp = Array(n).fill(true);
  for (let i = 0; i < n; i++) {
    let [x, y] = tickets[i];
    if (db[x] === undefined) {
      db[x] = [];
    }
    db[x].push(i);
  }

  function f(x, path, dp) {
    let p = db[x],
      ans = [];
    if (p !== undefined) {
      for (let i of p) {
        if (dp[i]) {
          let sub = [...dp];
          let [a, b] = tickets[i];
          sub[i] = false;
          let rst = [...path, a];

          if (rst.length < n) {
            rst = f(b, rst, sub);
          } else {
            rst.push(b);
          }

          if (
            rst.length === n + 1 &&
            (ans.length === 0 || rst.join("") < ans.join(""))
          ) {
            ans = [...rst];
          }
        }
      }
    }
    return ans;
  }

  return f("ICN", [], dp);
}
let values = [
  [
    [
      ["ICN", "JFK"],
      ["HND", "IAD"],
      ["JFK", "HND"],
    ],
    ["ICN", "JFK", "HND", "IAD"],
  ],
  [
    [
      ["ICN", "SFO"],
      ["ICN", "ATL"],
      ["SFO", "ATL"],
      ["ATL", "ICN"],
      ["ATL", "SFO"],
    ],
    ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"],
  ],
];

for (let [tickets, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      tickets
    )}, expected_result : ${expected_result} `
  );
}

//시도 1
// function solution(tickets) {
//   let ans = [],
//     db = {},
//     key = {};
//   for (let i of tickets) {
//     if (db[i[0]] === undefined) {
//       db[i[0]] = {};
//       key[i[0]] = [];
//     }
//     if (db[i[0]][i[1]] === undefined) {
//       db[i[0]][i[1]] = 0;
//       key[i[0]].push(i[1]);
//     }
//     db[i[0]][i[1]]++;
//   }
//   for (let i in key) {
//     key[i].sort();
//   }
//   function f(x, path, db) {
//     let p = key[x],
//       ans = [...path];
//     if (p === undefined) {
//       return path;
//     }
//     for (let i of p) {
//       if (db[x][i] > 0) {
//         let sub = { ...db };
//         sub[x][i]--;
//         let npath = f(i, [...path, i], sub);
//         if (npath.length > ans.length) {
//           ans = [...npath];
//         }
//       }
//     }

//     return ans;
//   }

//   return f("ICN", ["ICN"], db);
// }
