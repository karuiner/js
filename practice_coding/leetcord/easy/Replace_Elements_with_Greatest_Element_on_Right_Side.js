/*
 *
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    let ans = [],
        k = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        k = arr[i + 1] === undefined ? -1 : arr[i + 1] > k ? arr[i + 1] : k;
        ans[i] = k;
    }
    return ans;
};
//Runtime: 100 ms, faster than 73.54% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
//Memory Usage: 43.2 MB, less than 23.84% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.

// var replaceElements = function(arr) {
//     return arr.map((x,i,sub)=>{
//         let ans=-1
//         sub.slice(i+1).forEach((y)=>{
//             if (y >ans){
//                 ans=y
//             }
//         })
//         return ans

//     })

// };

// //Runtime: 580 ms, faster than 21.43% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
// //Memory Usage: 46.1 MB, less than 12.07% of JavaScript online submissions for Replace Elements with Greatest Element on Right Side.
