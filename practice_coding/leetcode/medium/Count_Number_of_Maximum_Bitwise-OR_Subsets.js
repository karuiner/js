/*
 *
 * @param {number[]} nums
 * @return {number}
 */
// var countMaxOrSubsets = function(nums) {
//     let p=nums.reduce((acc,x)=>acc|x,0)
//     let ans=0,l=nums.length
//     function f(a,j){
//         if (j >=l){
//             return a===p?1:0
//         }else{
//             let ans=0
//             for (let i=j;i <l ;i++ ){
//                 if (a ===p){
//                     ans++

//                 }
//                 let sub=f(a|nums[i],i+1)
//                 console.log(j,i,ans,sub)

//                 ans+=sub
//             }
//             return ans
//         }
//     }
//     return f(0,0)

// };

var countMaxOrSubsets = function (nums) {
  let p = nums.reduce((acc, x) => acc | x, 0);
  let ans = 0,
    l = nums.length;
  function f(a, j, k) {
    if (k === 0) {
      return a === p ? 1 : 0;
    }
    let ans = 0;
    for (let i = j; i < l; i++) {
      let sub = f(a | nums[i], i + 1, k - 1);
      ans += sub;
    }
    return ans;
  }
  for (let i = l; i > 0; i--) {
    ans += f(0, 0, i);
  }
  return ans;
};

// Runtime: 294 ms, faster than 18.75% of JavaScript online submissions for Count Number of Maximum Bitwise-OR Subsets.
// Memory Usage: 38.6 MB, less than 87.50% of JavaScript online submissions for Count Number of Maximum Bitwise-OR Subsets.
