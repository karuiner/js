/*
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let b = [...nums],
    n = nums.length;
  b.sort((a, b) => a - b);
  let k = 1,
    q = -1;
  for (let i of nums.slice(1)) {
    if (q < 0) {
      q = i;
    } else if (i > q) {
      break;
    } else {
      q = i;
    }
    k++;
  }
  if (k < n) {
    [nums[k - 1], nums[k]] = [nums[k], nums[k - 1]];
  } else {
    let z = nums[0];
    if (z < b[n - 1]) {
      for (let i of b) {
        if (i > z) {
          z = i;
          break;
        }
      }
    } else {
      z = b[0];
    }

    let dummy = [z, ...b.filter((x) => x !== z)];
    for (let i = 0; i < n; i++) {
      nums[i] = dummy[i];
    }
  }
};
