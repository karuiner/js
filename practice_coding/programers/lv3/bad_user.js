// 불량 유저

//풀이 완료
function solution(user_id, banned_id) {
  function check(a, b) {
    let l = a.length,
      ans = true;
    for (let i = 0; i < l; i++) {
      if (a[i] !== b[i] && b[i] !== "*") {
        ans = false;
        break;
      }
    }
    return ans;
  }
  let db = {};
  for (let i of user_id) {
    let l = i.length,
      s = i[0];
    if (db[l] === undefined) {
      db[l] = [];
    }

    db[l].push(i);
  }
  let ex_ban = [];
  for (let i of banned_id) {
    let l = i.length,
      arr = [];

    if (db[l] !== undefined) {
      for (let a of db[l]) {
        if (check(a, i)) {
          arr.push(a);
        }
      }
      ex_ban.push(arr);
    }
  }
  let ldb = {};
  function combi(idx, db) {
    let key = banned_id[idx],
      ans = 0;
    if (key === undefined) {
      let keys = Object.keys(db);
      keys.sort();
      let s = keys.join("-");
      if (ldb[s] === undefined) {
        ldb[s] = true;
        return 1;
      } else {
        return 0;
      }
    }
    for (let i of ex_ban[idx]) {
      if (db[i] === undefined && check(i, key)) {
        ans += combi(idx + 1, { ...db, [i]: true });
      }
    }

    return ans;
  }

  let ans = 0;
  if (ex_ban.length > 0) {
    ans = combi(0, {});
  }
  return ans;
}

let values = [
  [["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"], 2],
  [
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"],
    2,
  ],
  [
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"],
    3,
  ],
];
for (let [user_id, banned_id, expected_result] of values) {
  console.log(
    `calculated_result : ${solution(
      user_id,
      banned_id
    )}, expected_result : ${expected_result} `
  );
}

//풀이 시도 1
// function solution(user_id, banned_id) {
//   function check(a, b) {
//     let l = a.length,
//       ans = true;
//     for (let i = 0; i < l; i++) {
//       if (a[i] !== b[i] && b[i] !== "*") {
//         ans = false;
//         break;
//       }
//     }
//     return ans;
//   }
//   let db = {};
//   for (let i of user_id) {
//     let l = i.length,
//       s = i[0];
//     if (db[l] === undefined) {
//       db[l] = [];
//     }

//     db[l].push(i);
//   }
//   let out = {},
//     ans = {},
//     count = {};
//   for (let i of banned_id) {
//     let l = i.length,
//       arr = [];
//     if (count[l] === undefined) {
//       count[l] = 0;
//     }
//     count[l]++;
//     if (db[l] !== undefined) {
//       for (let a of db[l]) {
//         if (check(a, i)) {
//           arr.push(a);
//         }
//       }
//       arr.sort();
//       let s = arr.join("-");
//       if (out[s] === undefined) {
//         if (ans[l] === undefined) {
//           ans[l] = {};
//         }
//         for (let i of arr) {
//           if (ans[l][i] === undefined) {
//             ans[l][i] = true;
//           }
//         }
//         out[s] = arr;
//       }
//     }
//   }

//   function combi(a, b) {
//     [a, b] = a > b ? [b, a] : [a, b];
//     let u = 1,
//       d = 1;
//     for (let i = b; i > b - a; i--) {
//       u *= i;
//     }
//     for (let i = a; i > 1; i--) {
//       d *= i;
//     }
//     return u / d;
//   }
//   if (Object.keys(ans).length === 0) {
//     return 0;
//   }

//   let rst = 0;
//   for (let i in count) {
//     let a = count[i],
//       b = Object.keys(ans[i]).length;
//     if (b > 0) {
//       if (rst === 0) {
//         rst = combi(a, b);
//       } else {
//         rst *= combi(a, b);
//       }
//     }
//   }

//   return rst;
// }
