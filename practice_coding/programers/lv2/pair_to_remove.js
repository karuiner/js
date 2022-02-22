// 짝지어 제거하기
function solution(s) {
  var ans = 1,
    n = s.length;
  if (n % 2 !== 0) {
    return 0;
  }
  let db = {};
  for (let i = 0; i < n; i++) {
    if (db[s[i]] === undefined) {
      db[s[i]] = [i];
    } else {
      let k = i - db[s[i]][0];
      if (k === 1) {
        delete db[s[i]];
      } else if (k % 2 === 1) {
        db[s[i]] = [i, ...db[s[i]]];
      } else {
        ans = 0;
        break;
      }
    }
  }
  return ans;
}

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
