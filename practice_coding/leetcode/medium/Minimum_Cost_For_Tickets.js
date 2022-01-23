/*
 *
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
// var mincostTickets = function(days, costs) {
//     let max=365*costs[0]
//     let pass=[1,7,30]
//     function f(days,v){
//         if (days.length ===0){
//             return v
//         }
//         let ans=max
//         for (let i=0; i <3;i++){
//             let k=days[0],j=1
//             k+=pass[i]
//             while (days[j] <k){
//                 j++
//             }
//             let sub=f(days.slice(j),v+costs[i])
//             if (sub <ans){
//                 ans=sub
//             }

//         }
//         return ans
//     }
//     return f(days,0)
// };

// var mincostTickets = function (days, costs) {
//   let max = 365 * costs[0];
//   let pass = [1, 7, 30];
//   function get(arr, k) {
//     let a = 0,
//       b = arr.length - 1;
//     if (arr[0] > k) {
//       return 0;
//     }
//     if (arr[arr.length - 1] < k) {
//       return arr.length;
//     }
//     while (a < b) {
//       let m = Math.floor(0.5 * (a + b));
//       if (arr[m] < k) {
//         a = m + 1;
//       } else if (arr[m] > k) {
//         b = m;
//       } else {
//         a = b = m;
//       }
//     }
//     return a;
//   }

//   function f(days, v) {
//     if (days.length === 0) {
//       return v;
//     }
//     let ans = max;
//     for (let i = 0; i < 3; i++) {
//       let k = days[0],
//         j = 1;
//       k += pass[i];

//       if (i > 0) {
//         j = get(days, k);
//       }
//       let sub = f(days.slice(j), v + costs[i]);
//       if (sub < ans) {
//         ans = sub;
//       }
//     }
//     return ans;
//   }
//   return f(days, 0);
// };

// 알고리즘 개선중 30일권과 7일권을 구분할 기준 마련이 시급하다.
var mincostTickets = function (days, costs) {
  function get(arr, k) {
    let a = 0,
      b = arr.length - 1;
    if (arr[0] > k) {
      return 0;
    }
    if (arr[arr.length - 1] < k) {
      return arr.length;
    }
    while (a < b) {
      let m = Math.floor(0.5 * (a + b));
      if (arr[m] < k) {
        a = m + 1;
      } else if (arr[m] > k) {
        b = m;
      } else {
        a = b = m;
      }
    }
    return a;
  }

  let [a, b, c] = costs;
  let ans = 0;
  while (days.length > 0) {
    let k = days[0];
    let c1 = get(days, k + 7),
      c2 = get(days, k + 30);
    if (c1 * a < b) {
      days = days.slice(1);
      ans += a;
    } else if (c2 * a < c) {
      days = days.slice(c1);
      ans += b;
    } else {
      days = days.slice(c2);
      ans += c;
    }
  }

  return ans;
};
