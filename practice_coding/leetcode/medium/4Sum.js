/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */

//풀이 완료

var fourSum = function (nums, target) {
  let db = {},
    check = {};

  nums = nums.filter((x) => {
    if (check[x] === undefined) {
      check[x] = 1;
    } else {
      check[x]++;
    }

    return check[x] <= 4;
  });
  let n = nums.length;
  if (n < 4) {
    return [];
  }
  nums.sort((a, b) => a - b);
  function f(idx, t, c, s) {
    let ans = [];

    if (c > 0 && t <= nums[n - 1] * c) {
      for (let i = idx; i < n - c + 1; i++) {
        if (nums[idx] <= t / c) {
          let sub = f(i + 1, t - nums[i], c - 1, [...s, nums[i]]);
          ans = ans.concat(sub);
        }
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

// Runtime: 956 ms, faster than 9.58% of JavaScript online submissions for 4Sum.
// Memory Usage: 49.4 MB, less than 11.17% of JavaScript online submissions for 4Sum.
// 시도 4 실패

var fourSum = function (nums, target) {
  let db = {},
    n = nums.length,
    ans = [];
  if (n < 4) {
    return [];
  }

  let a = 0,
    b = 1,
    c = 2,
    d = 3;
  while (a < n - 2) {
    let s = nums[a] + nums[b] + nums[c] + nums[d];
    if (s > target) {
      if (d < n - 1 && nums[d] >= 0) {
        d++;
      } else if (c < d - 1 && nums[c] >= 0) {
        c++;
      } else if (b < c - 1 && nums[b] >= 0) {
        b++;
      } else if (a < b - 1) {
        a++;
      } else if (d < n - 1) {
        d++;
      } else if (c < d - 1) {
        c++;
      } else if (b < c - 1) {
        b++;
      } else {
        a++;
      }
    } else if (s < target) {
      if (d < n - 1 && nums[d] < 0) {
        d++;
      } else if (c < d - 1 && nums[c] < 0) {
        c++;
      } else if (b < c - 1 && nums[b] < 0) {
        b++;
      } else if (a < b - 1) {
        a++;
      } else if (d < n - 1) {
        d++;
      } else if (c < d - 1) {
        c++;
      } else if (b < c - 1) {
        b++;
      } else {
        a++;
      }
    } else {
      let arr = [nums[a], nums[b], nums[c], nums[d]];
      arr.sort((a, b) => a - b);
      let s = arr.join("_");
      if (db[s] === undefined) {
        db[s] = true;
        ans.push(arr);
      }

      if (d < n - 1) {
        d++;
      } else if (c < d - 1) {
        c++;
      } else if (b < c - 1) {
        b++;
      } else {
        a++;
      }
    }
  }

  return ans;
};

// 시도 3 - 시간 초가 282/291
// var fourSum = function (nums, target) {
//   let db = {},
//     n = nums.length,
//     check = {};
//   if (n < 4) {
//     return [];
//   }
//   nums.sort((a, b) => a - b);
//   function f(idx, t, c, s) {
//     let ans = [];
//     if (c > 0) {
//       for (let i = idx; i < n - c + 1; i++) {
//         let sub = f(i + 1, t - nums[i], c - 1, [...s, nums[i]]);
//         ans = ans.concat(sub);
//       }
//     } else {
//       if (t === 0) {
//         if (db[s] === undefined) {
//           db[s] = true;
//           ans.push(s);
//         }
//       }
//     }
//     return ans;
//   }

//   return f(0, target, 4, []);
// };

//시도 2- 시간초과

// var fourSum = function (nums, target) {
//   let db = {},
//     n = nums.length,
//     check = {};
//   if (n < 4) {
//     return [];
//   }
//   let arr = [];
//   for (let i of nums) {
//     if (check[i] === undefined) {
//       check[i] = 0;
//     }
//     check[i]++;
//     if (check[i] <= 4) {
//       arr.push(i);
//     }
//   }
//   arr.sort((a, b) => a - b);
//   n = arr.length;
//   function mks(s, v) {
//     if (s.length === 0) {
//       return `${v}`;
//     } else {
//       return `${s}_${v}`;
//     }
//   }
//   function f(i, c, s, ss) {
//     let ans = [];
//     db[c] = {};
//     if (c > 0) {
//       for (let j = i; j < n - c + 1; j++) {
//         let sub = f(j + 1, c - 1, mks(s, arr[j]), ss + arr[j]);
//         ans = ans.concat(sub);
//       }
//     } else {
//       let arr = s.split("_").map(Number);
//       if (db[s] === undefined) {
//         if (ss === target) {
//           db[s] = true;
//           ans.push(arr);
//         } else {
//           db[s] = false;
//         }
//       }
//     }

//     return ans;
//   }

//   return f(0, 4, "", 0);
// };
// 시간 초과
// var fourSum = function (nums, target) {
//   let db = {},
//     n = nums.length,
//     check = {};
//   if (n < 4) {
//     return [];
//   }
//   let arr = [];
//   for (let i of nums) {
//     if (check[i] === undefined) {
//       check[i] = 0;
//     }
//     check[i]++;
//     if (check[i] <= 4) {
//       arr.push(i);
//     }
//   }

//   arr.sort((a, b) => a - b);
//   function mks(s, v) {
//     if (s.length === 0) {
//       return `${v}`;
//     } else {
//       return `${s}_${v}`;
//     }
//   }

//   function f(nums, c, s, p) {
//     let ans = [];
//     if (c > 0) {
//       for (let i = 0; i < nums.length - c + 1; i++) {
//         let sub = f(
//           [...nums.slice(i + 1)],
//           c - 1,
//           mks(s, nums[i]),
//           p + nums[i]
//         );
//         ans = ans.concat(sub);
//       }
//     } else {
//       let arr = s.split("_").map(Number);

//       if (db[s] === undefined) {
//         if (p === target) {
//           db[s] = true;
//           ans.push(arr);
//         } else {
//           db[s] = false;
//         }
//       }
//     }
//     return ans;
//   }

//   return f(arr, 4, "", 0);
// };

// 풀이시도 1 - 시간초과
// var fourSum = function (nums, target) {
//   let db = {},
//     n = nums.length;
//   if (n < 4) {
//     return [];
//   }
//   function mks(s, v) {
//     if (s.length === 0) {
//       return `${v}`;
//     } else {
//       return `${s}_${v}`;
//     }
//   }

//   function f(nums, c, s) {
//     let ans = [];
//     if (c > 0) {
//       for (let i = 0; i < nums.length - c + 1; i++) {
//         let sub = f([...nums.slice(i + 1)], c - 1, mks(s, nums[i]));
//         ans = ans.concat(sub);
//       }
//     } else {
//       let sm = 0,
//         arr = s.split("_").map((x) => {
//           x = Number(x);
//           sm += x;
//           return x;
//         });
//       arr.sort((a, b) => a - b);
//       let k = arr.join("_");
//       if (db[k] === undefined) {
//         if (sm === target) {
//           db[k] = true;
//           ans.push(s.split("_").map(Number));
//         } else {
//           db[k] = false;
//         }
//       }
//     }
//     return ans;
//   }

//   return f(nums, 4, "");
// };
