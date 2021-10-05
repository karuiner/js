/*
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let a = nums1,
    b = nums2;
  if (nums2.length < nums1.length) {
    a = nums2;
    b = nums1;
  }
  let ans = [];
  while (a.length > 0) {
    let i = b.indexOf(a[0]);
    if (i >= 0) {
      ans.push(a[0]);
      b.splice(i, 1);
    }
    a = a.slice(1);
  }

  return ans;
};
//Runtime: 84 ms, faster than 64.65% of JavaScript online submissions for Intersection of Two Arrays II.
//Memory Usage: 44.3 MB, less than 5.02% of JavaScript online submissions for Intersection of Two Arrays II.
