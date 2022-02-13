/*
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let db = {},
    n = nums2.length,
    mx = Array(n).fill(0),
    mv = 0;
  for (let i = n - 1; i >= 0; i--) {
    db[nums2[i]] = i;
    if (nums2[i] > mv) {
      mv = nums2[i];
    }
    mx[i] = mv;
  }
  let ans = [];
  for (let i of nums1) {
    let k = db[i];
    if (mx[k] === nums2[k]) {
      ans.push(-1);
    } else {
      for (let j = k; j < n; j++) {
        if (nums2[j] > i) {
          ans.push(nums2[j]);
          break;
        }
      }
    }
  }
  return ans;
};

// Runtime: 60 ms, faster than 99.72% of JavaScript online submissions for Next Greater Element I.
// Memory Usage: 44.8 MB, less than 7.91% of JavaScript online submissions for Next Greater Element I.
