//풀이중
/*
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function (nums1, nums2) {
  let ans = [];
  nums1.sort((a, b) => a - b);
  for (let i of nums2) {
    let get = false;
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] > i) {
        ans.push(nums1[j]);
        nums1 = [...nums1.slice(0, j), ...nums1.slice(j + 1)];
        get = true;
        break;
      }
    }
    if (!get) {
      ans.push(nums1[0]);
      nums1 = [...nums1.slice(1)];
    }
  }
  return ans;
};
// 효율성 문제

// var advantageCount = function (nums1, nums2) {
//   let ans = [],
//     n = nums1.length;
//   nums1.sort((a, b) => a - b);
//   for (let i of nums2) {
//     let get = false;
//     if (i < nums1[n - 1] && i > nums1[0]) {
//       // let a=0,b=n-1
//       // while (b-a >1){
//       //     let m=Math.floor((a+b)/2)
//       //     if (nums1[m] < i){
//       //         a=m
//       //     } else if (nums1[m] >i){
//       //         b=m
//       //     } else {
//       //         a=b=m+1
//       //     }
//       // }
//       // ans.push(nums1[b])
//       // nums1=[...nums1.slice(0,b),...nums1.slice(b+1)]
//       // get=true

//       for (let j = 0; j < n; j++) {
//         if (nums1[j] > i) {
//           ans.push(nums1[j]);
//           nums1 = [...nums1.slice(0, j), ...nums1.slice(j + 1)];
//           get = true;
//           break;
//         }
//       }
//     } else if (i < nums1[0]) {
//       ans.push(nums1[0]);
//       nums1 = [...nums1.slice(1)];
//       get = true;
//     }

//     if (!get) {
//       ans.push(nums1[0]);
//       nums1 = [...nums1.slice(1)];
//     }
//     n--;
//   }
//   return ans;
// };
// 시도 1  제대로 된 값 연산하지 못함. 좀더 수정 필요 효율성또한 나아졌는지 알수 없음.
