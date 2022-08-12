/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 풀이시도 4 - 2 (159/161)
var threeSumClosest = function (nums, target) {
  let ans = 10000,
    n = nums.length,
    get = false;
  if (target > 0) {
    ans *= -1;
  }
  function len(s) {
    return s - target;
  }
  function len2(s) {
    return Math.abs(s - target);
  }

  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      let s = nums[i] + nums[j];

      let [a, b] = [j + 1, n - 1];
      if (len(s + nums[b]) < 0 && len2(ans) > len2(s + nums[b])) {
        ans = s + nums[b];
      } else if (len(s + nums[a]) > 0 && len2(ans) > len2(s + nums[a])) {
        ans = s + nums[a];
      } else {
        if (len(s + nums[a]) === 0 || len(s + nums[b]) === 0) {
          get = true;
          ans = len(s + nums[a]) === 0 ? s + nums[a] : s + nums[b];
          break;
        } else if (s + nums[a] - target < 0 && s + nums[b] - target > 0) {
          while (a < b) {
            let m = Math.floor((a + b) / 2);
            if (len(s + nums[m]) < 0) {
              a = m + 1;
            } else if (len(s + nums[m]) > 0) {
              b = m - 1;
            } else if (len(s + nums[m]) === 0) {
              get = true;
              ans = s + nums[m];
              break;
            }
          }
          if (!get) {
            if (Math.abs(len(s + nums[a])) <= Math.abs(len(s + nums[b]))) {
              ans = s + nums[a];
            } else {
              ans = s + nums[b];
            }
          }
        }
        if (get) {
          break;
        }
      }
    }
    if (get) {
      break;
    }
  }

  return ans;
};
// 풀이시도 4 -1
var threeSumClosest = function (nums, target) {
  let ans = 10000,
    n = nums.length,
    get = false;
  if (target > 0) {
    ans *= -1;
  }
  function len(s) {
    return Math.abs(s - target);
  }

  nums.sort((a, b) => a - b);
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      let s = nums[i] + nums[j];

      let [a, b] = [j + 1, n - 1];
      if (len(s + nums[a]) === 0 || len(s + nums[b]) === 0) {
        get = true;
        ans = len(s + nums[a]) === 0 ? s + nums[a] : s + nums[b];
        break;
      }

      if (len(ans) > len(s + nums[a])) {
        ans = s + nums[a];
      }
      if (len(ans) > len(s + nums[b])) {
        ans = s + nums[b];
      }
      while (a < b) {
        let m = Math.floor((a + b) / 2);
        if (len(s + nums[a]) <= len(s + nums[m])) {
          b = m - 1;
        } else if (len(s + nums[b]) < len(s + nums[m])) {
          a = m + 1;
        } else if (len(s + nums[m]) === 0) {
          get = true;
          ans = s + nums[m];
          break;
        }
      }
      if (get) {
        break;
      }
    }
    if (get) {
      break;
    }
  }

  return ans;
};

//풀이시도 3 (128/160)
var threeSumClosest = function (nums, target) {
  let ans = 10000,
    n = nums.length;
  if (target > 0) {
    ans *= -1;
  }
  nums.sort((a, b) => a - b);

  function f(idx, t, c) {
    let k = Math.abs(ans - target),
      check = true;
    if (ans < target) {
      if (t + nums[idx] * c < ans) {
        check = false;
      }
    } else if (ans > target) {
      if (t + nums[n - 1] * c > ans) {
        check = false;
      }
    } else {
      ans = target;
      check = false;
    }
    if (check) {
      if (c > 0) {
        for (let i = idx; i < n - c + 1; i++) {
          f(i + 1, t + nums[i], c - 1);
        }
      } else {
        if (k > Math.abs(t - target)) {
          ans = t;
        }
      }
    }
  }
  f(0, 0, 3);

  return ans;
};

// 풀이시도 2
var threeSumClosest = function (nums, target) {
  let ans = 1000000,
    n = nums.length;
  let i = 0,
    j = n - 1;
  while (j - i >= 2) {
    let a = nums[i] + nums[i + 1] + nums[j],
      b = nums[i] + nums[j - 1] + nums[j];
    let k1 = Math.abs(a - target),
      k2 = Math.abs(b - target);
    console.log(a, b, k1, k2);
    if (k1 > k2) {
      if (Math.abs(ans - target) > k2) {
        ans = b;
      }
      i++;
    } else {
      if (Math.abs(ans - target) > k1) {
        ans = a;
      }
      j--;
    }
  }
  return ans;
};
// 풀이시도 1
var threeSumClosest = function (nums, target) {
  let ans = 1000000,
    n = nums.length;
  nums.sort((a, b) => a - b);
  function f(idx, t, c) {
    if (c > 0) {
      for (let i = idx; i < n - c + 1; i++) {
        f(i + 1, t + nums[i], c - 1);
      }
    } else {
      if (Math.abs(ans - target) > Math.abs(t - target)) {
        ans = t;
      }
    }
  }
  f(0, 0, 3);
  return ans;
};
