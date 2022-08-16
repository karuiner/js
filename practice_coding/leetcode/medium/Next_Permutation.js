/*
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 풀이 완료
var nextPermutation = function (nums) {
  let b = [...nums],
    n = nums.length,
    db = {};
  if (n === 1) {
    return nums;
  }

  function f(arr, l) {
    let an = arr.length;
    let a = arr[0],
      b = arr.slice(1);
    if (an > 2) {
      let s = f(b, l + 1);

      if (s && a < b[0]) {
        arr.sort((a, b) => a - b);
        let q = [],
          check = true,
          k = -1;
        arr.forEach((x) => {
          if (x > a && check) {
            k = x;
            check = false;
          } else {
            q.push(x);
          }
        });

        nums[l] = k;
        for (let i = l + 1; i < n; i++) {
          nums[i] = q[i - (l + 1)];
        }
        return false;
      }
      return true && s;
    } else {
      if (a >= b[0]) {
        return true;
      } else {
        [nums[l], nums[l + 1]] = [nums[l + 1], nums[l]];
        return false;
      }
    }
  }
  let ans = f(nums, 0);
  if (ans) {
    nums.sort((a, b) => a - b);
  }
};

// Runtime: 134 ms, faster than 12.80% of JavaScript online submissions for Next Permutation.
// Memory Usage: 44 MB, less than 24.83% of JavaScript online submissions for Next Permutation.

// 풀이시도 1
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
