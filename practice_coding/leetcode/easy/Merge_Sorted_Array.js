/*
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let a = nums1.slice(0, m),
    b = nums2.slice(0, n),
    i = 0,
    j = 0;
  while (i < m || j < n) {
    if (i < m && j < n) {
      if (a[i] < b[j]) {
        nums1[i + j] = a[i];
        i++;
      } else {
        nums1[i + j] = b[j];
        j++;
      }
    } else if (i < m) {
      nums1[i + j] = a[i];
      i++;
    } else if (j < n) {
      nums1[i + j] = b[j];
      j++;
    }
  }
};
// Runtime: 72 ms, faster than 89.89% of JavaScript online submissions for Merge Sorted Array.
// Memory Usage: 39 MB, less than 20.16% of JavaScript online submissions for Merge Sorted Array.
