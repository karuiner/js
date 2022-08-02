/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
// 시도 4 - 시간 초가 282/291
var fourSum = function (nums, target) {
  let db = {},
    n = nums.length,
    check = {};
  if (n < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);
  function f(idx, t, c, s) {
    let ans = [];
    if (c > 0) {
      for (let i = idx; i < n - c + 1; i++) {
        let sub = f(i + 1, t - nums[i], c - 1, [...s, nums[i]]);
        ans = ans.concat(sub);
      }
    } else {
      if (t === 0) {
        if (db[s] === undefined) {
          db[s] = true;
          ans.push(s);
        }
      }
    }
    return ans;
  }

  return f(0, target, 4, []);
};

//시도 3- 시간초과

var fourSum = function (nums, target) {
  let db = {},
    n = nums.length,
    check = {};
  if (n < 4) {
    return [];
  }
  let arr = [];
  for (let i of nums) {
    if (check[i] === undefined) {
      check[i] = 0;
    }
    check[i]++;
    if (check[i] <= 4) {
      arr.push(i);
    }
  }
  arr.sort((a, b) => a - b);
  n = arr.length;
  function mks(s, v) {
    if (s.length === 0) {
      return `${v}`;
    } else {
      return `${s}_${v}`;
    }
  }
  function f(i, c, s, ss) {
    let ans = [];
    db[c] = {};
    if (c > 0) {
      for (let j = i; j < n - c + 1; j++) {
        let sub = f(j + 1, c - 1, mks(s, arr[j]), ss + arr[j]);
        ans = ans.concat(sub);
      }
    } else {
      let arr = s.split("_").map(Number);
      if (db[s] === undefined) {
        if (ss === target) {
          db[s] = true;
          ans.push(arr);
        } else {
          db[s] = false;
        }
      }
    }

    return ans;
  }

  return f(0, 4, "", 0);
};
// 시간 초과
var fourSum = function (nums, target) {
  let db = {},
    n = nums.length,
    check = {};
  if (n < 4) {
    return [];
  }
  let arr = [];
  for (let i of nums) {
    if (check[i] === undefined) {
      check[i] = 0;
    }
    check[i]++;
    if (check[i] <= 4) {
      arr.push(i);
    }
  }

  arr.sort((a, b) => a - b);
  function mks(s, v) {
    if (s.length === 0) {
      return `${v}`;
    } else {
      return `${s}_${v}`;
    }
  }

  function f(nums, c, s, p) {
    let ans = [];
    if (c > 0) {
      for (let i = 0; i < nums.length - c + 1; i++) {
        let sub = f(
          [...nums.slice(i + 1)],
          c - 1,
          mks(s, nums[i]),
          p + nums[i]
        );
        ans = ans.concat(sub);
      }
    } else {
      let arr = s.split("_").map(Number);

      if (db[s] === undefined) {
        if (p === target) {
          db[s] = true;
          ans.push(arr);
        } else {
          db[s] = false;
        }
      }
    }
    return ans;
  }

  return f(arr, 4, "", 0);
};

// 풀이시도 1 - 시간초과
var fourSum = function (nums, target) {
  let db = {},
    n = nums.length;
  if (n < 4) {
    return [];
  }
  function mks(s, v) {
    if (s.length === 0) {
      return `${v}`;
    } else {
      return `${s}_${v}`;
    }
  }

  function f(nums, c, s) {
    let ans = [];
    if (c > 0) {
      for (let i = 0; i < nums.length - c + 1; i++) {
        let sub = f([...nums.slice(i + 1)], c - 1, mks(s, nums[i]));
        ans = ans.concat(sub);
      }
    } else {
      let sm = 0,
        arr = s.split("_").map((x) => {
          x = Number(x);
          sm += x;
          return x;
        });
      arr.sort((a, b) => a - b);
      let k = arr.join("_");
      if (db[k] === undefined) {
        if (sm === target) {
          db[k] = true;
          ans.push(s.split("_").map(Number));
        } else {
          db[k] = false;
        }
      }
    }
    return ans;
  }

  return f(nums, 4, "");
};
