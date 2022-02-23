// 짝지어 제거하기

// stack 이라는 힌트를 보고 생각해본것
// 하지만 효율성 부분에서 오래걸림.(이전 방식에 비해서는 훨씬 효율적임.)
function solution(s) {
  let n = s.length;
  if (n % 2 !== 0) {
    return 0;
  }
  let ds = "";
  for (let i = 0; i < n; i++) {
    ds = s[i] + ds;
    if (ds.length > 1) {
      if (ds[0] === ds[1]) {
        ds = ds.slice(2);
      }
    }
  }
  return ds.length === 0 ? 1 : 0;
}

// 미완성
// function solution(s) {
//   var ans = 1,
//     n = s.length;
//   if (n % 2 !== 0) {
//     return 0;
//   }
//   let db = {};
//   for (let i = 0; i < n; i++) {
//     if (db[s[i]] === undefined) {
//       db[s[i]] = [i];
//     } else {
//       let k = i - db[s[i]][0];
//       if (k === 1) {
//         delete db[s[i]];
//       } else if (k % 2 === 1) {
//         db[s[i]] = [i, ...db[s[i]]];
//       } else {
//         ans = 0;
//         break;
//       }
//     }
//   }
//   return ans;
// }

// 정확한 값을 돌려주는 듯하지만 속도가 느리다.
// function solution(s) {
//   var ans = 1,
//     n = s.length;
//   if (n % 2 !== 0) {
//     return 0;
//   }

//   while (n > 0) {
//     for (let i = 0; i < n - 1; i++) {
//       if (s[i] === s[i + 1]) {
//         s = s.slice(0, i) + s.slice(i + 2);
//         break;
//       }
//     }
//     if (s.length === n) {
//       ans = 0;
//       break;
//     }
//     n -= 2;
//   }

//   return ans;
// }

// 더느리다
// function solution(s) {
//   var ans = 1,
//     n = s.length;
//   if (n % 2 !== 0) {
//     return 0;
//   }
//   while (n > 0) {
//     let i = 0,
//       sub = "";
//     while (i < n) {
//       if (i === n - 2 && s[i] !== s[i + 1]) {
//         sub += s[i] + s[i + 1];
//         i += 2;
//       } else if (s[i] !== s[i + 1]) {
//         sub += s[i];
//         i += 1;
//       } else {
//         i += 2;
//       }
//     }
//     if (sub.length === n) {
//       ans = 0;
//       break;
//     }
//     n = sub.length;
//     s = sub;
//   }

//   return ans;
// }
