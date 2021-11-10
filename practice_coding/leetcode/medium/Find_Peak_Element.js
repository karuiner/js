/*
 *
 * @param {number[]} nums
 * @return {number}
 */
// var findPeakElement = function(nums) {
//     function find(arr,q){
//         let n=arr.length
//         if (n > 2){
//            let k=Math.floor(n/2)
//            let a=find(arr.slice(0,k),q)
//            let b=find(arr.slice(k),q+k)
//            if (b[0] <a[0]){
//                return a
//            }else{
//                return b
//            }
//         }else{
//            if (n ===1){
//                return [arr[0],q]
//            }else{
//                if (arr[0] >arr[1]){
//                    return [arr[0],q]
//                }else{
//                    return [arr[1],q+1]
//                }
//            }
//         }
//     }
//     let ans=find(nums,0)
//     return ans[1]
// };
// Runtime: 84 ms, faster than 33.48% of JavaScript online submissions for Find Peak Element.
// Memory Usage: 40.2 MB, less than 5.07% of JavaScript online submissions for Find Peak Element.
// var findPeakElement = function(nums) {
//     let k=[nums[0],0]
//     for (let i=1 ; i <nums.length;i++){
//         if (k[0]<nums[i]){
//             k=[nums[i],i]
//         }
//     }
//     return k[1]
// };

// 참조함
var findPeakElement = function (nums) {
  let a = 0,
    b = nums.length - 1,
    m = 0;
  while (b > a) {
    m = Math.floor((b + a) / 2);
    if (nums[m] > nums[m + 1]) {
      b = m;
    } else {
      a = m + 1;
    }
  }

  return a;
};
