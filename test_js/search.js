let info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
];

let query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
];

// function solution(info, query) {
//     var answer = [];
//     for (let i of query) {
//         let ck = i.split(" ").reduce(function (x, y) {
//             return y !== "and" ? x.concat(y) : x;
//         }, []);
//         let nck = info.reduce(function (x, y) {
//             let ay = y.split(" ");
//             if (
//                 (ck[0] === ay[0] || ck[0] === "-") &&
//                 (ck[1] === ay[1] || ck[1] === "-") &&
//                 (ck[2] === ay[2] || ck[2] === "-") &&
//                 (ck[3] === ay[3] || ck[3] === "-") &&
//                 Number(ck[4]) <= Number(ay[4])
//             ) {
//                 console.log(y);
//                 x.push(y);
//             }
//             return x;
//         }, []);
//     }

//     return answer;
// }

// console.log(solution(info, query));

// 테스트 1 〉	통과 (0.45ms, 30.3MB)
// 테스트 2 〉	통과 (0.42ms, 29.9MB)
// 테스트 3 〉	통과 (1.47ms, 30.1MB)
// 테스트 4 〉	통과 (11.18ms, 33.7MB)
// 테스트 5 〉	통과 (80.25ms, 35.1MB)
// 테스트 6 〉	통과 (208.15ms, 35.2MB)
// 테스트 7 〉	통과 (56.62ms, 35.6MB)
// 테스트 8 〉	통과 (415.86ms, 35.8MB)
// 테스트 9 〉	통과 (437.34ms, 35.8MB)
// 테스트 10 〉	통과 (440.49ms, 36.2MB)
// 테스트 11 〉	통과 (77.48ms, 35.5MB)
// 테스트 12 〉	통과 (224.82ms, 35.3MB)
// 테스트 13 〉	통과 (62.07ms, 35.2MB)
// 테스트 14 〉	통과 (438.66ms, 35.6MB)
// 테스트 15 〉	통과 (462.55ms, 35.4MB)
// 테스트 16 〉	통과 (74.32ms, 35.1MB)
// 테스트 17 〉	통과 (229.67ms, 35.1MB)
// 테스트 18 〉	통과 (438.75ms, 35.7MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

// function solution(info, query) {
//     let db = { "-": [], score: [] };
//     let ninfo = info.map(function (v, index) {
//         let ay = v.split(" ");
//         for (let i of ay) {
//             if (isNaN(i)) {
//                 db[i] = db[i] === undefined ? [index] : db[i].concat(index);
//             } else {
//                 db["score"][index] = i;
//             }
//         }
//         db["-"].push(index);
//         return ay;
//     });
//     //    let tn = ninfo.length;
//     let answer = query.map(function (v) {
//         let ck = v.split(" ").reduce(function (x, y) {
//             return y !== "and" ? x.concat(y) : x;
//         }, []);
//         let cks = ck.slice(-1);
//         let target = db["score"].reduce(function (acc, v, index) {
//             return Number(v) >= Number(cks) ? acc.concat(index) : acc;
//         }, []);
//         for (let i of ck.slice(0, -1)) {
//             if (i !== "-") {
//                 target = target.filter(function (x) {
//                     return db[i].includes(x);
//                 });
//             }
//         }
//         return target.length;
//     });
//     return answer;
// }
// console.log(solution(info, query));

// 테스트 1 〉	통과 (0.68ms, 30MB)
// 테스트 2 〉	통과 (0.72ms, 29.8MB)
// 테스트 3 〉	통과 (2.26ms, 30.2MB)
// 테스트 4 〉	통과 (20.11ms, 34.6MB)
// 테스트 5 〉	통과 (78.08ms, 34.7MB)
// 테스트 6 〉	통과 (290.03ms, 34.3MB)
// 테스트 7 〉	통과 (77.32ms, 35.1MB)
// 테스트 8 〉	통과 (3757.50ms, 48MB)
// 테스트 9 〉	통과 (3760.05ms, 48.5MB)
// 테스트 10 〉	통과 (4270.26ms, 48.4MB)
// 테스트 11 〉	통과 (82.47ms, 34.3MB)
// 테스트 12 〉	통과 (281.38ms, 34.4MB)
// 테스트 13 〉	통과 (75.77ms, 34.9MB)
// 테스트 14 〉	통과 (1976.57ms, 39.5MB)
// 테스트 15 〉	통과 (2026.01ms, 43.4MB)
// 테스트 16 〉	통과 (80.77ms, 34.6MB)
// 테스트 17 〉	통과 (307.11ms, 34.6MB)
// 테스트 18 〉	통과 (1831.03ms, 40MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

// function solution(info, query) {
//     var answer = [];
//     for (let i of query) {
//         let ck = i.split(" ").reduce(function (x, y) {
//             return y !== "and" ? x.concat(y) : x;
//         }, []);
//         let nck = info.reduce(function (x, y) {
//             let ay = y.split(" ");
//             if (Number(ck[4]) <= Number(ay[4])) {
//                 if (ck[0] === "-" || ck[0] === ay[0]) {
//                     if (ck[1] === "-" || ck[1] === ay[1]) {
//                         if (ck[2] === "-" || ck[2] === ay[2]) {
//                             if (ck[3] === "-" || ck[3] === ay[3]) {
//                                 x.push(y);
//                             }
//                         }
//                     }
//                 }
//             }
//             return x;
//         }, []);
//         answer.push(nck.length);
//     }

//     return answer;
// }

// console.log(solution(info, query));

// 테스트 1 〉	통과 (0.47ms, 30MB)
// 테스트 2 〉	통과 (0.43ms, 30.1MB)
// 테스트 3 〉	통과 (1.52ms, 30.1MB)
// 테스트 4 〉	통과 (11.44ms, 34.2MB)
// 테스트 5 〉	통과 (75.76ms, 35.2MB)
// 테스트 6 〉	통과 (210.39ms, 35.2MB)
// 테스트 7 〉	통과 (59.18ms, 35.5MB)
// 테스트 8 〉	통과 (418.77ms, 36.4MB)
// 테스트 9 〉	통과 (441.83ms, 35.9MB)
// 테스트 10 〉	통과 (458.29ms, 36.1MB)
// 테스트 11 〉	통과 (83.01ms, 35.1MB)
// 테스트 12 〉	통과 (253.86ms, 35.4MB)
// 테스트 13 〉	통과 (65.39ms, 35.5MB)
// 테스트 14 〉	통과 (453.83ms, 35.5MB)
// 테스트 15 〉	통과 (473.48ms, 35.6MB)
// 테스트 16 〉	통과 (77.88ms, 35.2MB)
// 테스트 17 〉	통과 (225.49ms, 35.6MB)
// 테스트 18 〉	통과 (453.03ms, 35.6MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

// function solution(info, query) {
//     let db = {};
//     let ninfo = info.map(function (v) {
//         let ay = v.split(" ");
//         let x = db;
//         ay.forEach(function (y, i, collec) {
//             if (i < ay.length - 2) {
//                 if (x[y] === undefined) {
//                     x[y] = {};
//                     x = x[y];
//                 } else {
//                     x = x[y];
//                 }
//             } else if (i < ay.length - 1) {
//                 if (x[y] === undefined) {
//                     x[y] = [collec[i + 1]];
//                 } else {
//                     x[y] = x[y].concat(collec[i + 1]);
//                 }
//             }
//         });
//     });
//     let answer = query.map(function (v, idx) {
//         let ck = v.split(" ").reduce(function (x, y) {
//             return y !== "and" ? x.concat(y) : x;
//         }, []);
//         let pick = ck.reduce(
//             function (acc, v) {
//                 if (v === "-") {
//                     acc = [].concat(
//                         ...acc.map(function (xacc) {
//                             let xxreturn = [];
//                             for (let j of Object.keys(xacc)) {
//                                 xxreturn.push(xacc[j]);
//                             }
//                             return xxreturn;
//                         })
//                     );
//                     if (idx === query.length - 1) {
//                     }
//                 } else if (isNaN(v)) {
//                     acc = [].concat(
//                         ...acc.map(function (xacc) {
//                             return xacc[v] || [];
//                         })
//                     );
//                 } else {
//                     acc = acc.reduce(function (acc, v) {
//                         return acc.concat(v);
//                     }, []);

//                     acc = [].concat(...acc.filter((x) => Number(x) >= Number(v)));
//                 }
//                 return acc;
//             },
//             [db]
//         );
//         return pick.length;
//     });
//     return answer;
// }
// console.log(solution(info, query));

// 테스트 1 〉	통과 (0.70ms, 30.2MB)
// 테스트 2 〉	통과 (0.59ms, 29.8MB)
// 테스트 3 〉	통과 (1.50ms, 30.3MB)
// 테스트 4 〉	통과 (8.86ms, 32.1MB)
// 테스트 5 〉	통과 (15.02ms, 34.3MB)
// 테스트 6 〉	통과 (21.83ms, 34.4MB)
// 테스트 7 〉	통과 (29.11ms, 35.5MB)
// 테스트 8 〉	통과 (142.03ms, 35.4MB)
// 테스트 9 〉	통과 (179.01ms, 35.9MB)
// 테스트 10 〉	통과 (126.44ms, 35.5MB)chicken과 pizza
// 테스트 16 〉	통과 (21.13ms, 35.4MB)
// 테스트 17 〉	통과 (20.55ms, 34.2MB)
// 테스트 18 〉	통과 (72.64ms, 36MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

// function solution(info, query) {
//     let db = [
//         ["cpp", "java", "python"],
//         ["backend", "frontend"],
//         ["junior", "senior"],
//         ["chicken", "pizza"],
//     ];
//     let ldb = {};
//     let keys = db.reduce(function (acc, v) {
//         if (acc.length === 0) {
//             return v;
//         } else {
//             return acc.reduce((x, y) => {
//                 return x.concat(
//                     ...v.map((k) => {
//                         return [y, k].join(" ");
//                     })
//                 );
//             }, []);
//         }
//     }, []);
//     keys.forEach((x) => {
//         ldb[x] = [];
//     });
//     info.map(function (v) {
//         let ay = v.split(" ");
//         let nkey = ay.slice(0, -1).join(" ");
//         let score = ay.slice(-1)[0];
//         ldb[nkey].push(score);
//     });
//     return query.map((x) => {
//         let ck = x.split(" ").reduce(function (x, y) {
//             return y !== "and" ? x.concat(y) : x;
//         }, []);
//         let nkey = ck.slice(0, -1).join(" ");
//         let score = ck.slice(-1)[0];
//         let ans = ldb[nkey] || false;
//         if (!ans) {
//             let tkey = ck.slice(0, -1).filter((x) => x != "-");
//             let target = keys.filter((x) => {
//                 let ans = true;
//                 for (let i of tkey) {
//                     ans = ans && x.includes(i);
//                 }
//                 return ans;
//             });
//             ans = target.reduce((x, y) => {
//                 return x.concat(ldb[y]);
//             }, []);
//         }
//         ans = ans.filter((x) => Number(x) >= Number(score)).length;
//         return ans;
//     });
// }
// console.log(solution(info, query));

// 테스트 1 〉	통과 (0.85ms, 30.1MB)
// 테스트 2 〉	통과 (0.77ms, 30.1MB)
// 테스트 3 〉	통과 (1.87ms, 30.2MB)
// 테스트 4 〉	통과 (11.54ms, 33.6MB)
// 테스트 5 〉	통과 (13.05ms, 34.4MB)
// 테스트 6 〉	통과 (10.68ms, 34.4MB)
// 테스트 7 〉	통과 (22.12ms, 36MB)
// 테스트 8 〉	통과 (15.63ms, 34.7MB)
// 테스트 9 〉	통과 (15.85ms, 35.7MB)
// 테스트 10 〉	통과 (16.22ms, 35.1MB)
// 테스트 11 〉	통과 (12.74ms, 34.1MB)
// 테스트 12 〉	통과 (10.52ms, 33.8MB)
// 테스트 13 〉	통과 (25.89ms, 36.3MB)
// 테스트 14 〉	통과 (14.18ms, 34.3MB)
// 테스트 15 〉	통과 (13.17ms, 35.3MB)
// 테스트 16 〉	통과 (12.56ms, 34.4MB)
// 테스트 17 〉	통과 (11.38ms, 34MB)
// 테스트 18 〉	통과 (13.04ms, 35.2MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)

// function solution(info, query) {
//     let db = [
//         ["cpp", "java", "python"],
//         ["backend", "frontend"],
//         ["junior", "senior"],
//         ["chicken", "pizza"],
//     ];
//     let keyv = { cpp: 0, java: 8, python: 16, backend: 0, frontend: 4, junior: 0, senior: 2, chicken: 0, pizza: 1 };

//     let ldb = {};
//     let keys = db.reduce(function (acc, v) {
//         if (acc.length === 0) {
//             return v;
//         } else {
//             return acc.reduce((x, y) => {
//                 return x.concat(
//                     ...v.map((k) => {
//                         return [y, k].join(" ");
//                     })
//                 );
//             }, []);
//         }
//     }, []);
//     keys.forEach((x) => {
//         ldb[x] = [];
//     });
//     // console.log(keys, keys[0], keys[4]);
//     info.map(function (v) {
//         let ay = v.split(" ");
//         let nkey = ay.slice(0, -1).join(" ");
//         let score = ay.slice(-1)[0];
//         ldb[nkey].push(score);
//     });
//     // console.log(db);
//     return query.map((x) => {
//         let ck = x.split(" ").reduce(function (x, y) {
//             return y !== "and" ? x.concat(y) : x;
//         }, []);
//         let nkey = ck.slice(0, -1).join(" ");
//         let score = ck.slice(-1)[0];
//         let ans = ldb[nkey] || false;
//         if (!ans) {
//             let tkey = ck.slice(0, -1);
//             let target = tkey.reduce((acc, x, i) => {
//                 x = x === "-" ? db[i] : [].concat(x);
//                 if (acc.length > 0) {
//                     acc = acc.reduce((accx, accy) => {
//                         return accx.concat(x.map((xx) => accy + Number(keyv[xx])));
//                     }, []);
//                 } else {
//                     acc = x.map((xx) => Number(keyv[xx]));
//                 }
//                 return acc;
//             }, []);
//             ans = target.reduce((x, y) => {
//                 return x.concat(ldb[keys[y]]);
//             }, []);
//         }
//         ans = ans.filter((x) => Number(x) >= Number(score)).length;
//         return ans;
//     });
// }
console.log(solution(info, query));
// 테스트 1 〉	통과 (0.83ms, 29.9MB)
// 테스트 2 〉	통과 (0.87ms, 30.1MB)
// 테스트 3 〉	통과 (1.61ms, 30.2MB)
// 테스트 4 〉	통과 (12.63ms, 33.9MB)
// 테스트 5 〉	통과 (14.62ms, 34.3MB)
// 테스트 6 〉	통과 (10.99ms, 34.2MB)
// 테스트 7 〉	통과 (23.90ms, 35MB)
// 테스트 8 〉	통과 (15.13ms, 34.8MB)
// 테스트 9 〉	통과 (15.03ms, 34.9MB)
// 테스트 10 〉	통과 (16.60ms, 35.8MB)
// 테스트 11 〉	통과 (14.85ms, 34.4MB)
// 테스트 12 〉	통과 (10.37ms, 33.9MB)
// 테스트 13 〉	통과 (23.82ms, 34.6MB)
// 테스트 14 〉	통과 (13.89ms, 34.8MB)
// 테스트 15 〉	통과 (12.17ms, 34.5MB)
// 테스트 16 〉	통과 (14.35ms, 34.7MB)
// 테스트 17 〉	통과 (9.71ms, 34.2MB)
// 테스트 18 〉	통과 (11.83ms, 34.3MB)
// 효율성  테스트
// 테스트 1 〉	실패 (시간 초과)
// 테스트 2 〉	실패 (시간 초과)
// 테스트 3 〉	실패 (시간 초과)
// 테스트 4 〉	실패 (시간 초과)
