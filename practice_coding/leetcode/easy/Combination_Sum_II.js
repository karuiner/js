/*
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function (candidates, target) {
  let db = {};
  for (let i of candidates) {
    if (db[i] !== undefined) {
      db[i]++;
    } else {
      db[i] = 1;
    }
  }
  let arr = Object.keys(db)
    .map((x) => Number(x))
    .sort((a, b) => a - b);
  function f(arr, t, com) {
    let ans = [],
      k = arr[0];
    for (let i = 0; i <= db[k]; i++) {
      if (arr.length > 1 && t - i * k > 0) {
        let sub = f(arr.slice(1), t - i * k, [...com, ...Array(i).fill(k)]);
        ans = ans.concat(sub);
      } else if (t - i * k === 0) {
        ans.push([...com, ...Array(i).fill(k)]);
      }
    }
    return ans;
  }
  return f(arr, target, []);
};

// Runtime: 100 ms, faster than 29.04% of JavaScript online submissions for Combination Sum II.
// Memory Usage: 44.9 MB, less than 16.64% of JavaScript online submissions for Combination Sum II.

// 실패작
// var combinationSum2 = function (candidates, target) {
//   let db = {};
//   function f(arr, x, com) {
//     let ans = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (x - arr[i] === 0) {
//         let sub = [...com, arr[i]];
//         sub.sort((a, b) => a - b);
//         if (db[sub] === undefined) {
//           ans.push(sub);
//           db[sub] = true;
//         }
//       } else if (x - arr[i] > 0) {
//         let sub = f([...arr.slice(0, i), ...arr.slice(i + 1)], x - arr[i], [
//           ...com,
//           arr[i],
//         ]);
//         ans = ans.concat(sub);
//       }
//     }
//     return ans;
//   }

//   function f2(arr, x, t) {
//     let ans = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (x - arr[i] === t) {
//         let sub = [...arr.slice(0, i), ...arr.slice(i + 1)];
//         sub.sort((a, b) => a - b);
//         if (db[sub] === undefined) {
//           ans.push(sub);
//           db[sub] = true;
//         }
//       } else if (x - arr[i] > t) {
//         let sub = f2([...arr.slice(0, i), ...arr.slice(i + 1)], x - arr[i], t);
//         ans = ans.concat(sub);
//       }
//     }
//     return ans;
//   }
//   let p = candidates.reduce((acc, x) => acc + x, 0);
//   console.log(p);
//   // if (p ===target){
//   //     return [candidates]
//   // }else if (p <target){
//   //     return []
//   // }
//   // return f(candidates,target,[])
//   //    return f2(candidates,p,target)
// };
