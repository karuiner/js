/*
 *
 * @param {number[]} nums
 * @return {number}
 */

// 풀이 완료
var maximumUniqueSubarray = function (nums) {
  let ans = 0,
    n = nums.length,
    db = {},
    l = 0,
    r = 0,
    s = 0;
  while (l <= r && r < n) {
    let k = nums[r];
    if (db[k] === undefined) {
      s += k;
      db[k] = r;
    } else {
      l = l < db[k] + 1 ? db[k] + 1 : l;
      if (s > ans) {
        ans = s;
      }
      s = 0;
      for (let i = l; i <= r; i++) {
        s += nums[i];
      }
      db[k] = r;
    }
    r++;
  }
  return ans > s ? ans : s;
};

// Runtime: 1261 ms, faster than 9.78% of JavaScript online submissions for Maximum Erasure Value.
// Memory Usage: 56.7 MB, less than 75.55% of JavaScript online submissions for Maximum Erasure Value.
// 시도 2
// var maximumUniqueSubarray = function (nums) {
//   let ans = 0,
//     n = nums.length,
//     db = {},
//     max = 0;
//   for (let i = 0; i < n; i++) {
//     let k = nums[i];
//     if (db[k] === undefined) {
//       ans += k;
//       db[k] = i;
//       if (ans > max) {
//         max = ans;
//       }
//     } else {
//       let j = db[k],
//         s = 0;
//       for (let i in db) {
//         if (db[i] <= j) {
//           s += Number(i);
//           delete db[i];
//         }
//       }
//       ans = ans - s + k;
//       db[k] = i;
//     }
//   }

//   //     for (let i =0; i <n;i++){
//   //         let k=nums[i]
//   //         if (db[k]===undefined){
//   //             ans+=k
//   //             db[k]=ans
//   //             if (ans>max){
//   //                 max=ans
//   //             }
//   //         }else{
//   //             ans-=db[k]
//   //             ans+=k
//   //             db[k]=ans
//   //         }

//   //     }

//   return ans > max ? ans : max;
// };

// 시도 1
// var maximumUniqueSubarray = function (nums) {
//   let ans = 0,
//     n = nums.length,
//     db = {},
//     max = 0;
//   for (let i = 0; i < n; i++) {
//     let k = nums[i];
//     if (db[k] === undefined) {
//       ans += k;
//       db[k] = ans;
//       if (ans > max) {
//         max = ans;
//       }
//     } else {
//       ans -= db[k];
//       ans += k;
//       db[k] = ans;
//     }
//     console.log(ans, max, k, db[k]);
//   }

//   return max;
// };
