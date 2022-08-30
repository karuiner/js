//최적의 행렬 곱셈

// 예시 풀이 순서 정리
// ex 01 ) input : 	[[5, 3], [3, 10], [10, 6]] , result : 270
// [[5, 3]], [[3, 10], [10, 6]] , sum =0
// [[5, 3], [3, 6]] , sum = 180 = 0 + 180 (3*10*6)
// [5, 6] , sum = 270 = 180 + 90 (5*3*6)

// ex 02 ) input : 	[[7, 1], [1, 6], [6, 6], [6, 5], [5, 8], [8, 9], [9, 9], [9, 2], [2, 1], [1, 9]] , result : 349
// [[7, 1]], [[1, 6], [6, 6], [6, 5], [5, 8], [8, 9], [9, 9], [9, 2], [2, 1]], [[1, 9]] , sum = 0
// [1, 6], [6, 6], [6, 5], [5, 8], [8, 9], [9, 9], [9, 2], [2, 1] 의 연산
// 앞에서 부터 계산
// 1*6*6 + 1*6*5 + 1*5*8 + 1*8*9 + 1*9*9 + 1*9*2 + 1*2*1 = 279
// 뒤에서 부터 계산
// 1*2*9 + 1*9*9 + 1*9*8 + 1*8*5 + 1*5*6 + 1*6*6 + 1*6*1 = 283
// [[7, 1], [1, 1], [1, 9]] , sum = 279 = 0 + 279(1*6*6 + 1*6*5 + 1*5*8 + 1*8*9 + 1*9*9 + 1*9*2 + 1*2*1)
// [[7, 1], [1, 9]] , sum = 286 = 279 + 7(7*1*1)
// [7, 9] , sum = 349 = 286 + 63(7*1*9)

// ex 03 ) input : 	[[3, 9], [9, 5], [5, 2], [2, 2], [2, 7], [7, 4], [4, 5], [5, 9], [9, 4], [4, 6]] , result : 498
// [[3, 9], [9, 5], [5, 2]], [[2, 2]], [[2, 7], [7, 4], [4, 5], [5, 9], [9, 4], [4, 6]] , sum = 0
// [[3, 9], [9, 5], [5, 2]] , sum = 144(2*5*9 + 2*9*3)
// [[2, 7], [7, 4], [4, 5], [5, 9], [9, 4], [4, 6]] , sum = 306(2*7*4 + 2*4*5 + 2*5*9 + 2*9*4 + 2*4*6)
// [[3, 2], [2, 2], [2, 6]] , sum = 450 = 144 + 306
// [[3, 2], [2, 6]] , sum = 462 = 450 + 12(3*2*2)
// [3, 6] ,  sum = 498 = 462 + 36(3*2*6)

// ex 04 ) input : 	[[6, 9], [9, 7], [7, 1], [1, 4], [4, 1], [1, 1], [1, 4], [4, 9], [9, 2], [2, 5]] , result : 218
// [[6, 9], [9, 7], [7, 1]], [[1, 4], [4, 1]], [[1, 1]], [[1, 4], [4, 9], [9, 2]], [[2, 5]], sum = 0
// [[6, 9], [9, 7], [7, 1]] => [6, 1] , sum = 117(1*7*9 + 1*9*6)
// [[1, 4], [4, 1]] => [1, 1] , sum = 4(1*4*1)
// [[1, 4], [4, 9], [9, 2]] => [1, 2] , sum = 54(1*4*9 + 1*9*2)
// [[6, 1], [1, 1], [1, 1], [1, 2], [2, 5]], sum = 175 = 117 + 4 + 54
// [[6, 1], [1, 1], [1, 2], [2, 5]] sum = 176 = 175 + 1(1*1*1)
// [[6, 1], [1, 5]] sum = 188 = 176 + 12(1*1*2 + 1*2*5)
// [[6, 5]] sum = 218 = 188 + 30(6*1*5)

// ex 05 ) input : 	[[7, 3], [3, 8], [8, 2], [2, 1]] , result : 61
// [[7, 3]], [[3, 8], [8, 2], [2, 1]] , sum = 0
// [[7, 3], [3, 1]] , sum = 40 = 0 + 40(1*2*8 + 1*8*3)
// [7, 1] ,  sum = 61 = 40 + 21(7*3*1)

// ex 06 ) input : 	[[8, 8], [8, 7], [7, 8], [8, 2]] , result : 352
// [[8, 8], [8, 7], [7, 8], [8, 2]] , sum = 0
// 뒤에서부터 연산을 시작
// 2*8*7 + 2*7*8 + 2*8*8 = 352 (2*7*8 = 112, 2*8*8 = 128 )

// 방법 고민
// 0. 배열의 길이를 확인한다. 2 이상인지를 확인
// 1. 주어진 배열에서 min 값을 찾는다. (최초시 위치 구분없음, 2차이상일경우 내부에서확인 될경우 적용)
// 2. min값으로 영역을 나눈다.
// 4. 나뉜 영역의 크기에 따라 1-3을 반복한다.
// 5. 구분된 영역에서 연산을 수행한다.
// 6. 최소값을 찾는다.

// 시도 11
function solution(matrix_sizes) {
  let ans = 0,
    l = matrix_sizes.length - 1;

  function divide(mat) {
    let l = mat.length - 1,
      arr = [],
      sub = [];
    for (let i = 0; i < l; i++) {
      let a = matrix_sizes[i],
        b = matrix_sizes[i + 1];
      if (a[0] >= a[1] && b[0] <= b[1]) {
        sub.push(a);
        arr.push(sub);
        sub = [];
      } else {
        sub.push(a);
      }
      if (i == l - 1) {
        sub.push(b);
        arr.push(sub);
        sub = [];
      }
    }
    return arr;
  }

  function cal(mat) {
    let x = mat.length;
    for (let i = 0; i < x - 1; i++) {
      let a = mat[i],
        b = mat[i + 1];
    }
  }
  let sub = divide(matrix_sizes);
  // while (sub.length > 2){
  //     let arr=[]
  //     for (let i of sub){
  //         let psub=cal(i)
  //         arr.push(psub)
  //     }
  //     sub=divide(arr)
  // }

  return 0;
}

// 시도 10
// 순차적 계산을 수행하는 방식을 생각 해보았지만 부족함점이 많음 좀더 고민해볼것

function solution(matrix_sizes) {
  let ans = 0,
    arr = [],
    n = matrix_sizes.length,
    mn = 200,
    l = 0;

  function f(i, s) {
    let a = matrix_sizes[i],
      b = matrix_sizes[i + 1];
    while (i < n - 2 && a[0] <= a[1] && a[0] <= b[1]) {
      s += a[0] * a[1] * b[1];
      a = [a[0], b[1]];
      i++;
      b = matrix_sizes[i + 1];
      console.log(a, s);
    }
    arr.push(a);
    if (i < n - 2) {
      s = f(i + 1, s);
    }
    return s;
  }
  let s = f(0, 0);
  console.log(arr, s);

  return ans;
}

// 시도 9 방법 고민중
// function solution(matrix_sizes) {
//   let ans = 0,
//     arr = [],
//     n = matrix_sizes.length,
//     mn = 200,
//     l = 0;

//   for (let i = 0; i < n; i++) {
//     if (i < n - 1) {
//       let a = matrix_sizes[i],
//         b = matrix_sizes[i + 1];
//       if (a[0] > a[1] && b[0] < b[1]) {
//         arr.push([l, i + 1]);
//         l = i + 1;
//       }
//     } else {
//       arr.push([l, i + 1]);
//     }
//   }
//   console.log(arr);
//   function f(arr) {
//     let n = arr.length,
//       ans = 0;
//     let k = arr[n - 1][1];
//     for (let i = n - 2; i >= 0; i--) {
//       let m1 = arr[i];
//       ans += m1[0] * m1[1] * k;
//     }
//     let sub = 0;
//     k = arr[0][0];
//     for (let i = 1; i < n; i++) {
//       let m1 = arr[i];
//       sub += k * m1[0] * m1[1];
//     }
//     ans = sub < ans ? sub : ans;

//     return [[arr[0][0], arr[n - 1][1]], ans];
//   }
//   let cal = [],
//     c = 0;
//   console.log(arr);
//   for (let [i, j] of arr) {
//     let sub = matrix_sizes.slice(i, j);
//     if (sub.length < 2) {
//       cal.push(sub[0]);
//       c++;
//     } else {
//       let [rst, s] = f(sub);
//       console.log(rst, s);
//       ans += s;
//       cal.push(rst);
//       c++;
//     }
//   }
//   console.log(cal);
//   if (c > 2) {
//     console.log(cal);
//   } else if (c === 2) {
//     ans += cal[0][0] * cal[0][1] * cal[1][1];
//   }

//   return ans;
// }

// 시도 8 잘못된 계산을 진행하는 부분 수정

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
//       l = i < n - 1 ? i : i + 1;
//     }
//   }
//   if (l < n) {
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
//       // console.log(rst, s);
//       ans += s;
//       cal.push(rst);
//       c++;
//     }
//   }
//   // console.log(cal);
//   if (c > 2) {
//     ans +=
//       cal[0][0] * cal[0][1] * cal[c - 1][1] +
//       (c - 3) * (mn * mn * mn) +
//       Math.min(cal[0][0], cal[c - 1][1]) * mn * mn;
//   } else if (c === 2) {
//     ans += cal[0][0] * cal[0][1] * cal[1][1];
//   }

//   return ans;
// }

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
