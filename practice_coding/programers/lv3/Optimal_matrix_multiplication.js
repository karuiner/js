//최적의 행렬 곱셈

// 시도 8 잘못된 계산을 진행하는 부분 수정

function solution(matrix_sizes) {
  let ans = 0,
    arr = [],
    n = matrix_sizes.length,
    mn = 200,
    l = 0;
  for (let i = 0; i < n; i++) {
    let [a, b] = matrix_sizes[i];
    if (a < mn || b < mn) {
      mn = Math.min(a, b);
      arr = [];
      l = 0;
    }
    if (a === mn) {
      l = i;
    }
    if (b === mn) {
      arr.push([l, i + 1]);
      l = i < n - 1 ? i : i + 1;
    }
  }
  if (l < n) {
    arr.push([l, n]);
  }
  function f(arr) {
    let n = arr.length,
      ans = 0;
    if (arr[n - 1][1] === mn) {
      let k = arr[n - 1][1];
      for (let i = n - 2; i >= 0; i--) {
        let m1 = arr[i];
        ans += m1[0] * m1[1] * k;
      }
    } else {
      let k = arr[0][0];
      for (let i = 1; i < n; i++) {
        let m1 = arr[i];
        ans += k * m1[0] * m1[1];
      }
    }
    return [[arr[0][0], arr[n - 1][1]], ans];
  }
  let cal = [],
    c = 0;
  for (let [i, j] of arr) {
    let sub = matrix_sizes.slice(i, j);
    if (sub.length < 2) {
      cal.push(sub[0]);
      c++;
    } else {
      let [rst, s] = f(sub);
      // console.log(rst, s);
      ans += s;
      cal.push(rst);
      c++;
    }
  }
  // console.log(cal);
  if (c > 2) {
    ans +=
      cal[0][0] * cal[0][1] * cal[c - 1][1] +
      (c - 3) * (mn * mn * mn) +
      Math.min(cal[0][0], cal[c - 1][1]) * mn * mn;
  } else if (c === 2) {
    ans += cal[0][0] * cal[0][1] * cal[1][1];
  }

  return ans;
}

// 시도 7 - min 값이 아니라 변곡점을 기반으로 분류할것
// function solution(matrix_sizes) {
//   let ans = 0,
//     arr = [],
//     n = matrix_sizes.length,
//     mn = 200,
//     l = 0;
//   for (let i = 0; i < n; i++) {
//     let [a, b] = matrix_sizes[i];
//     if (a < mn || b < mn) {
//       mn = Math.min(a, b);
//       arr = [];
//       l = 0;
//     }
//     if (a === mn) {
//       l = i;
//     }
//     if (b === mn) {
//       arr.push([l, i + 1]);
//       l = i;
//     }
//   }
//   if (l < n - 1) {
//     arr.push([l, n]);
//   }
//   function f(arr) {
//     let n = arr.length,
//       ans = 0;
//     if (arr[n - 1][1] === mn) {
//       let k = arr[n - 1][1];
//       for (let i = n - 2; i >= 0; i--) {
//         let m1 = arr[i];
//         ans += m1[0] * m1[1] * k;
//       }
//     } else {
//       let k = arr[0][0];
//       for (let i = 1; i < n; i++) {
//         let m1 = arr[i];
//         ans += k * m1[0] * m1[1];
//       }
//     }
//     return [[arr[0][0], arr[n - 1][1]], ans];
//   }
//   let cal = [],
//     c = 0;
//   for (let [i, j] of arr) {
//     let sub = matrix_sizes.slice(i, j);
//     if (sub.length < 2) {
//       cal.push(sub[0]);
//       c++;
//     } else {
//       let [rst, s] = f(sub);

//       ans += s;
//       cal.push(rst);
//       c++;
//     }
//   }
//   if (c > 2) {
//     ans +=
//       cal[0][0] * cal[0][1] * cal[c - 1][1] +
//       (c - 3) +
//       Math.min(cal[0][0], cal[c - 1][1]);
//   } else if (c === 2) {
//     ans += cal[0][0] * cal[0][1] * cal[1][1];
//   }

//   return ans;
// }

// 시도 6 예제 하나 통과
// function solution(matrix_sizes) {
//   let ans = 0,
//     db = {};
//   function f(mat, s) {
//     if (mat.length === 2) {
//       let a = mat[0],
//         b = mat[1],
//         value = 0;

//       if (db[`${a[0]}-${a[1]}-${b[1]}`] === undefined) {
//         value = a[0] * a[1] * b[1];
//         db[`${a[0]}-${a[1]}-${b[1]}`] = value;
//       } else {
//         value = db[`${a[0]}-${a[1]}-${b[1]}`];
//       }
//       s += value;
//       if (s < ans || ans === 0) {
//         ans = s;
//       }
//     } else {
//       for (let i = 0; i < mat.length - 1; i++) {
//         let a = mat[i],
//           b = mat[i + 1],
//           value = 0;

//         if (db[`${a[0]}-${a[1]}-${b[1]}`] === undefined) {
//           value = a[0] * a[1] * b[1];
//           db[`${a[0]}-${a[1]}-${b[1]}`] = value;
//         } else {
//           value = db[`${a[0]}-${a[1]}-${b[1]}`];
//         }

//         f([...mat.slice(0, i), [a[0], b[1]], ...mat.slice(i + 2)], s + value);
//       }
//     }
//   }
//   f(matrix_sizes, 0);

//   return ans;
// }

//시도 5  예제 하나 통과
// function solution(matrix_sizes) {
//   let db = {};
//   function f(mat, s) {
//     if (mat.length === 1) {
//       return s;
//     } else if (mat.length === 2) {
//       let a = mat[0],
//         b = mat[1];
//       if (db[`${a[0]}-${a[1]}-${b[1]}`] === undefined) {
//         s += a[0] * a[1] * b[1];
//       } else {
//         s += db[`${a[0]}-${a[1]}-${b[1]}`];
//       }
//       return s;
//     }
//     let k = -1,
//       size = 0,
//       m = 0,
//       arr = [],
//       value = 0;

//     for (let i = 0; i < mat.length - 1; i++) {
//       let a = mat[i],
//         b = mat[i + 1],
//         mna = Math.min(a[0], b[0]),
//         mnb = Math.min(a[1], b[1]);

//       if (k < 0 || (a[0] <= mna && b[1] <= mnb) || a[0] * b[1] < size) {
//         k = i;
//         m = a[1];
//         size = a[0] * b[1];
//         arr = [a[0], b[1]];
//         if (db[`${a[0]}-${a[1]}-${b[1]}`] === undefined) {
//           value = a[0] * a[1] * b[1];
//           db[`${a[0]}-${a[1]}-${b[1]}`] = value;
//         } else {
//           value = db[`${a[0]}-${a[1]}-${b[1]}`];
//         }
//       }
//     }

//     return f([...mat.slice(0, k), arr, ...mat.slice(k + 2)], s + value);
//   }

//   return f(matrix_sizes, 0);
// }

// 시도 4 반례 보완
// function solution(matrix_sizes) {
//   function f(mat, s) {
//     if (mat.length === 1) {
//       return s;
//     }

//     let k = -1,
//       size = 0,
//       m = 0,
//       arr = [],
//       value = 0;
//     for (let i = 0; i < mat.length - 1; i++) {
//       let a = mat[i],
//         b = mat[i + 1];
//       if (k < 0 || (a[0] <= a[1] && b[1] <= b[0])) {
//         k = i;
//         m = a[1];
//         size = a[0] * b[1];
//         arr = [a[0], b[1]];
//         value = a[0] * a[1] * b[1];
//       }
//     }

//     return f([...mat.slice(0, k), arr, ...mat.slice(k + 2)], s + value);
//   }

//   return f(matrix_sizes, 0);
// }
// 시도 2
// function solution(matrix_sizes) {
//   function f(mat, s) {
//     if (mat.length === 1) {
//       return s;
//     }

//     let k = -1,
//       size = 0,
//       m = 0,
//       arr = [],
//       value = 0;
//     for (let i = 0; i < mat.length - 1; i++) {
//       let a = mat[i],
//         b = mat[i + 1];
//       if (k < 0 || (m < a[1] && a[0] * b[1] < size)) {
//         k = i;
//         m = a[1];
//         size = a[0] * b[1];
//         arr = [a[0], b[1]];
//         value = a[0] * a[1] * b[1];
//       }
//     }

//     return f([...mat.slice(0, k), arr, ...mat.slice(k + 2)], s + value);
//   }

//   return f(matrix_sizes, 0);
// }
// 모든 경우의 수를 탐색

function solutiont(matrix_sizes) {
  let ans = 0;
  function f(mat, s) {
    if (mat.length === 1 && (ans === 0 || s < ans)) {
      ans = s;
    }
    for (let i = 0; i < mat.length - 1; i++) {
      let a = mat[i],
        b = mat[i + 1],
        value = a[0] * a[1] * b[1];

      f([...mat.slice(0, i), [a[0], b[1]], ...mat.slice(i + 2)], s + value);
    }
  }
  f(matrix_sizes, 0);

  return ans;
}

// 시도3 반례 찾기
function mf(l, mx = 200) {
  let arr = [],
    n = 0,
    c = -1;
  function rd(mx) {
    mx = mx > 200 ? 200 : mx;
    mx = mx < 3 ? 3 : mx;
    let k = Math.floor(Math.random() * (mx - 1)) + 1;
    return k > mx ? mx : k;
  }

  while (n < l) {
    if (n === 0) {
      let a = rd(mx),
        b = rd(mx);
      arr.push([a, b]);
      c = b;
      n++;
    } else {
      let a = rd(mx);
      arr.push([c, a]);
      c = a;
      n++;
    }
  }

  return arr;
}
let ccc = 0;
while (ccc < 10) {
  let arr = mf(10, 10);
  let a = solution(arr),
    b = solutiont(arr);
  if (a !== b) {
    console.log(arr, a, b);
    ccc++;
  }
}

// 시도  1
// function solution(matrix_sizes) {
//   let ans = 0,
//     p = [],
//     n = matrix_sizes.length,
//     data = [...matrix_sizes];
//   while (n > 1) {
//     let k = 0,
//       mx = 0;
//     for (let i = 0; i < n - 1; i++) {
//       let a = data[i],
//         b = data[i + 1];
//       if (b[0] > b[1] && b[0] > a[0]) {
//         if (b[0] > mx) {
//           mx = b[0];
//           k = i;
//         }
//       }
//     }

//     let a = data[k],
//       b = data[k + 1];
//     data = [...data.slice(0, k), [a[0], b[1]], ...data.slice(k + 2)];
//     ans += a[0] * b[0] * b[1];
//     n--;
//   }

//   return ans;
// }