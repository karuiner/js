/*
 *
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let ans = [],
    n = arr.length,
    c = 1e7;
  arr.sort((a, b) => a - b);

  for (let i = 0; i < n - 1; i++) {
    let k = Math.abs(arr[i] - arr[i + 1]);
    if (k < c) {
      c = k;
      ans = [[arr[i], arr[i + 1]]];
    } else if (k === c) {
      ans.push([arr[i], arr[i + 1]]);
    }
  }
  return ans;
};
// Runtime: 140 ms, faster than 97.46% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 54 MB, less than 19.79% of JavaScript online submissions for Minimum Absolute Difference.

// var minimumAbsDifference = function(arr) {
//     let db={},n=arr.length,c=1e7
//     arr.sort((a,b)=>a-b)

//     for (let i=0; i <n-1;i++){
//         let k=Math.abs(arr[i]-arr[i+1])
//         if (db[k]===undefined){
//             db[k]=[]
//         }
//         c=k<c?k:c
//         db[k].push([arr[i],arr[i+1]])
//     }
//     return db[c]

// };

// Runtime: 196 ms, faster than 24.35% of JavaScript online submissions for Minimum Absolute Difference.
// Memory Usage: 69.5 MB, less than 5.15% of JavaScript online submissions for Minimum Absolute Difference.
