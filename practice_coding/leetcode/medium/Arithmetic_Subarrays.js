/*
 *
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let k = l.length;
  let ans = Array(k).fill(false);
  for (let i = 0; i < k; i++) {
    let p = nums.slice(l[i], r[i] + 1);

    p.sort((x, y) => x - y);
    let d = p[1] - p[0],
      ck = true;
    for (let j = 1; j < r[i] - l[i]; j++) {
      if (p[j + 1] - p[j] !== d) {
        ck = false;
        break;
      }
    }
    if (ck) ans[i] = true;
  }
  return ans;
};
//Runtime: 152 ms, faster than 73.91% of JavaScript online submissions for Arithmetic Subarrays.
//Memory Usage: 45.3 MB, less than 52.90% of JavaScript online submissions for Arithmetic Subarrays.
