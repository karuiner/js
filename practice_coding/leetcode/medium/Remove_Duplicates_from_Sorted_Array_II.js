/*
 *
 * @param {number[]} nums
 * @return {number}
 */

// 풀이 완료
var removeDuplicates = function (nums) {
  let db = {},
    n = nums.length,
    j = 0;
  for (let i = 0; i < n; i++) {
    let k = nums[i];
    if (db[k] === undefined) {
      db[k] = 1;
      nums[j] = k;
      j++;
    } else if (db[k] < 2) {
      db[k]++;
      nums[j] = k;
      j++;
    }
  }
  return j;
};

// Runtime: 86 ms, faster than 61.51% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
// Memory Usage: 44.1 MB, less than 53.02% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
