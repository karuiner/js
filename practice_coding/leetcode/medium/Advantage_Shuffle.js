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
