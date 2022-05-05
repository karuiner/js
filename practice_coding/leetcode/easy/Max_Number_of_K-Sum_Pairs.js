/*
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 풀이 완료
var maxOperations = function (nums, k) {
  let db = {},
    ans = 0;
  for (let i of nums) {
    if (db[k - i] !== undefined && db[k - i] > 0) {
      db[k - i]--;
      ans++;
    } else if (db[i] === undefined) {
      db[i] = 1;
    } else {
      db[i]++;
    }
  }
  return ans;
};

// Runtime: 265 ms, faster than 30.77% of JavaScript online submissions for Max Number of K-Sum Pairs.
// Memory Usage: 58.9 MB, less than 28.85% of JavaScript online submissions for Max Number of K-Sum Pairs.

// 풀이시도 1
// var maxOperations = function (nums, k) {
//   let db = {},
//     ans = 0;
//   for (let i of nums) {
//     if (i < k) {
//       if (db[i] === undefined) {
//         db[i] = 1;
//       } else {
//         db[i]++;
//       }
//     }
//   }
//   while (true) {
//     let check = true;
//     for (let i in db) {
//       let j = k - Number(i);
//       if (db[i] !== undefined && db[j] !== undefined) {
//         if (Number(i) === j && db[i] > 1) {
//           if (db[i] === 2) {
//             ans++;
//           } else {
//             let q = Math.floor(db[i] / 2);
//             ans += q;
//           }
//           delete db[i];
//           check = false;
//           break;
//         } else if (Number(i) !== j) {
//           if (db[i] === 1 || db[j] === 1) {
//             ans++;
//           } else {
//             let q = Math.min(db[i], db[j]);
//             ans += q;
//           }
//           delete db[i];
//           delete db[j];

//           check = false;
//           break;
//         }
//       } else {
//         if (db[i] === undefined) {
//           delete db[j];
//         }
//         if (db[j] === undefined) {
//           delete db[i];
//         }
//       }
//     }
//     if (check) {
//       break;
//     }
//   }
//   return ans;
// };
