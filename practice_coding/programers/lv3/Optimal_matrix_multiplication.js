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

// 새 방법 고민 2
// 우선 주어진 배열의 최소값을 구한다.
// 주어진 배열을 뒤에서부터 카운팅하여 구간을 분류한다. (예제 4번에서 2,5 를 별도의 구간으로 구분가능 ) [소값에 소값으로 이어지는 구간을 분류 ]
//  각구간을 계산
// 계산후 완성된 배열에대해 최소값만으로 이루어지는 배열의 값을 우선 계산하되 좌우 배열과의 계산값을 비교하여 최소값으로 완성한다.

// 시도 15 - 테스트 - 알고리즘 문제 발견
function solution(matrix_sizes) {
  let min = 200;
  matrix_sizes.forEach(([a, b]) => {
    min = Math.min(a, b, min);
  });
  console.log(min);

  function cal(arr) {
    let n = arr.length;
    let s1 = 0,
      s2 = 0,
      fs = arr[0],
      bs = arr[n - 1];
    for (let i = 1; i < n; i++) {
      let a = arr[i],
        b = arr[n - 1 - i];
      s1 += fs[0] * fs[1] * a[1];
      fs = [fs[0], a[1]];
      s2 += bs[1] * bs[0] * b[0];
      bs = [b[0], bs[1]];
    }
    if (s1 < s2) {
      return [fs, s1];
    } else {
      return [bs, s2];
    }
  }
  function divide(arr) {
    let ans = [],
      n = arr.length - 1,
      sub = [],
      min = 200;
    for (let i = 0; i < n; i++) {
      let a = arr[i],
        b = arr[i + 1];
      if (a[0] >= a[1] && b[0] <= b[1]) {
        sub.push(a);
        min = Math.min(...a, min);
        ans.push([sub, min]);
        sub = [];
        min = 200;
        if (i === n - 1) {
          min = Math.min(...b, min);
          ans.push([[b], min]);
        }
      } else {
        sub.push(a);
        min = Math.min(...a, min);
        if (i === n - 1) {
          sub.push(b);
          min = Math.min(...b, min);
          ans.push([sub, min]);
        }
      }
    }
    return ans;
  }
  let arr = divide(matrix_sizes);
  let narr = [],
    s = 0;
  for (let [sub, xmin] of arr) {
    if (min === xmin) {
      let sub2 = cal(sub);
      narr.push(sub2[0]);
      s += sub2[1];
    } else {
      narr.push(...sub);
    }
  }
  function solution2(matrix_sizes) {
    let min = 200,
      idxes = [];
    matrix_sizes.forEach(([a, b]) => {
      if (a < min) {
        min = a;
      }
      if (b < min) {
        min = b;
      }
    });
    matrix_sizes.forEach(([a, b], i) => {
      if (a === min || b === min) {
        idxes.push(i);
      }
    });
    function f(arr, s, idxes) {
      let n = arr.length;
      if (n <= 2) {
        let [a, b] = arr;
        return s + a[0] * a[1] * b[1];
      } else {
        let ans = Infinity;
        // for (let i =0; i < n ; i++){
        for (let j = 0; j < idxes.length; j++) {
          let i = idxes[j],
            nidxes = [];
          let [a, b] = arr[i];
          if (a === min || b === min) {
            if (a === min && i < n - 1) {
              let k = a * b * arr[i + 1][1];
              if (i + 1 === idxes[j + 1]) {
                nidxes = [
                  ...idxes.slice(0, j),
                  i,
                  ...idxes.slice(j + 2).map((x) => x - 1),
                ];
              } else {
                nidxes = [
                  ...idxes.slice(0, j),
                  i,
                  ...idxes.slice(j + 1).map((x) => x - 1),
                ];
              }
              let sub = f(
                [...arr.slice(0, i), [a, arr[i + 1][1]], ...arr.slice(i + 2)],
                s + k,
                nidxes
              );
              if (sub < ans) {
                ans = sub;
              }
            }

            if (b === min && i > 0) {
              let k = a * b * arr[i - 1][0];
              if (i - 1 === idxes[j - 1]) {
                nidxes = [
                  ...idxes.slice(0, j - 1),
                  i - 1,
                  ...idxes.slice(j + 1).map((x) => x - 1),
                ];
              } else {
                nidxes = [
                  ...idxes.slice(0, j),
                  i - 1,
                  ...idxes.slice(j + 1).map((x) => x - 1),
                ];
              }
              let sub = f(
                [
                  ...arr.slice(0, i - 1),
                  [arr[i - 1][0], b],
                  ...arr.slice(i + 1),
                ],
                s + k,
                nidxes
              );
              if (sub < ans) {
                ans = sub;
              }
            }
          }
        }
        return ans;
      }
    }

    return f(matrix_sizes, 0, idxes);
  }
  console.log(narr, s);
  console.log(solution2(narr) + s);
  arr = divide(narr);
  narr = [];
  for (let [sub, xmin] of arr) {
    if (min === xmin) {
      let sub2 = cal(sub);
      narr.push(sub2[0]);
      s += sub2[1];
    } else {
      narr.push(...sub);
    }
  }
  console.log(narr, s);
  function lastCal(arr) {}
}

//시도 15 - 준비중
function solution(matrix_sizes) {
  let darr = [],
    n = matrix_sizes.length,
    sub = [],
    min = 200;
  matrix_sizes.forEach(([a, b]) => {
    min = Math.min(a, b, min);
  });
  let xmin = -1;

  for (let i = 0; i < n - 1; i++) {
    let a = matrix_sizes[i],
      b = matrix_sizes[i + 1];
    if (xmin === -1) {
      xmin = Math.min(...a);
    } else {
      xmin = Math.min(...a, xmin);
    }
    if (a[0] >= a[1] && b[0] <= b[1]) {
      sub.push(a);
      darr.push([sub, xmin]);
      sub = [];
      xmin = -1;
    } else {
      sub.push(a);
    }
    if (i === n - 2) {
      if (xmin === -1) {
        xmin = Math.min(...b);
      } else {
        xmin = Math.min(...b, xmin);
      }
      sub.push(b);
      darr.push([sub, xmin]);
      sub = [];
    }
  }
  console.log(darr);

  return 0;
}

// 시도 14
function solution(matrix_sizes) {
  let min = 200,
    idxes = [];
  matrix_sizes.forEach(([a, b]) => {
    if (a < min) {
      min = a;
    }
    if (b < min) {
      min = b;
    }
  });
  matrix_sizes.forEach(([a, b], i) => {
    if (a === min || b === min) {
      idxes.push(i);
    }
  });
  function f(arr, s, idxes) {
    let n = arr.length;
    if (n <= 2) {
      let [a, b] = arr;
      return s + a[0] * a[1] * b[1];
    } else {
      let ans = Infinity;
      // for (let i =0; i < n ; i++){
      for (let j = 0; j < idxes.length; j++) {
        let i = idxes[j],
          nidxes = [];
        let [a, b] = arr[i];
        if (a === min || b === min) {
          if (a === min && i < n - 1) {
            let k = a * b * arr[i + 1][1];
            if (i + 1 === idxes[j + 1]) {
              nidxes = [
                ...idxes.slice(0, j),
                i,
                ...idxes.slice(j + 2).map((x) => x - 1),
              ];
            } else {
              nidxes = [
                ...idxes.slice(0, j),
                i,
                ...idxes.slice(j + 1).map((x) => x - 1),
              ];
            }
            let sub = f(
              [...arr.slice(0, i), [a, arr[i + 1][1]], ...arr.slice(i + 2)],
              s + k,
              nidxes
            );
            if (sub < ans) {
              ans = sub;
            }
          }

          if (b === min && i > 0) {
            let k = a * b * arr[i - 1][0];
            if (i - 1 === idxes[j - 1]) {
              nidxes = [
                ...idxes.slice(0, j - 1),
                i - 1,
                ...idxes.slice(j + 1).map((x) => x - 1),
              ];
            } else {
              nidxes = [
                ...idxes.slice(0, j),
                i - 1,
                ...idxes.slice(j + 1).map((x) => x - 1),
              ];
            }
            let sub = f(
              [...arr.slice(0, i - 1), [arr[i - 1][0], b], ...arr.slice(i + 1)],
              s + k,
              nidxes
            );
            if (sub < ans) {
              ans = sub;
            }
          }
        }
      }
      return ans;
    }
  }

  return f(matrix_sizes, 0, idxes);
}

// 시도 13
function solution(matrix_sizes) {
  let min = 200,
    idxes = [];
  matrix_sizes.forEach(([a, b]) => {
    if (a < min) {
      min = a;
    }
    if (b < min) {
      min = b;
    }
  });
  matrix_sizes.forEach(([a, b], i) => {
    if (a === min || b === min) {
      idxes.push(i);
    }
  });
  console.log(idxes);
  function f(arr, idxes, s) {
    let n = arr.length;
    if (n <= 2) {
      let [a, b] = arr;
      return s + a[0] * a[1] * b[1];
    } else {
      let ans = Infinity;
      for (let i = 0; i < n; i++) {
        let [a, b] = arr[i];
        if (a === min || b === min) {
          if (a === min && i < n - 1) {
            let k = a * b * arr[i + 1][1];

            let sub = f(
              [...arr.slice(0, i), [a, arr[i + 1][1]], ...arr.slice(i + 2)],
              s + k
            );
            if (sub < ans) {
              ans = sub;
            }
          }

          if (b === min && i > 0) {
            let k = a * b * arr[i - 1][0];
            let sub = f(
              [...arr.slice(0, i - 1), [arr[i - 1][0], b], ...arr.slice(i + 1)],
              s + k
            );
            if (sub < ans) {
              ans = sub;
            }
          }
        }
      }
      return ans;
    }
  }

  return f(matrix_sizes, idxes, 0);
}

// 시도 13 - 고민중
function solution(matrix_sizes) {
  function divide(arr) {
    let ans = [],
      n = arr.length - 1,
      sub = [];
    for (let i = 0; i < n; i++) {
      let a = arr[i],
        b = arr[i + 1];
      if (a[0] >= a[1] && b[0] <= b[1]) {
        sub.push(a);
        ans.push(sub);
        sub = [];
        if (i === n - 1) {
          ans.push([b]);
        }
      } else {
        sub.push(a);
        if (i === n - 1) {
          sub.push(b);
          ans.push(sub);
        }
      }
    }
    return ans;
  }
  console.log(divide(matrix_sizes));

  return 0;
}
// 시도 12
function solution(matrix_sizes) {
  function cal(arr) {
    let n = arr.length;
    let s1 = 0,
      s2 = 0,
      fs = arr[0],
      bs = arr[n - 1];
    for (let i = 1; i < n; i++) {
      let a = arr[i],
        b = arr[n - 1 - i];
      s1 += fs[0] * fs[1] * a[1];
      fs = [fs[0], a[1]];
      s2 += bs[1] * bs[0] * b[0];
      bs = [b[0], bs[1]];
    }
    if (s1 < s2) {
      return [fs, s1];
    } else {
      return [bs, s2];
    }
  }

  function f(arr, s, min) {
    let n = arr.length;
    if (n > 2) {
      let narr = [],
        sub = [];
      for (let i = 0; i < n; i++) {
        if (
          arr[i][1] === min &&
          arr[i][0] >= arr[i][1] &&
          arr[i + 1] !== undefined &&
          arr[i + 1][1] >= arr[i][1]
        ) {
          sub.push(arr[i]);
          narr.push(sub);
          sub = [];
        } else {
          sub.push(arr[i]);
        }
      }
      if (sub.length > 0) {
        narr.push(sub);
        sub = [];
      }
      console.log(min, narr);
      if (narr.length > 1) {
        let sub = [],
          c = 0;
        for (let i of narr) {
          let x = f(i, 0, min);
          sub.push(x[0]);
          c += x[1];
        }
        let nsub = [],
          idx = 0,
          p = sub.length,
          xx = 0;
        while (idx < p) {
          let [a, b] = sub[idx];
          if (a === b) {
            let c1 = undefined,
              c2 = undefined;
            if (idx > 0) {
              c1 = cal([nsub[nsub.length - 1], sub[idx]]);
            }
            if (idx < p) {
              c2 = cal([sub[idx], sub[idx + 1]]);
            }
            if (c1 === undefined || c2[1] < c1[1]) {
              nsub.push(c2[0]);
              idx++;
              xx += c2[1];
            } else {
              nsub = [...nsub.slice(0, -1), c1[0]];
              xx += c1[1];
            }
          } else {
            nsub.push([a, b]);
          }
          idx++;
        }
        console.log("nsub", nsub);
        sub = f(nsub, 0, min);
        console.log("sub", sub);
        arr = sub[0];
        s += sub[1] + c + xx;
      } else {
        narr = narr[0];
        let sub = cal(narr);
        arr = sub[0];
        s += sub[1];
      }

      return [arr, s];
    } else {
      if (n === 1) {
        return [arr[0], s];
      } else {
        let [a, b] = arr;
        return [[a[0], b[1]], s + a[0] * a[1] * b[1]];
      }
    }
  }
  let db = {},
    key = [],
    ans = 1000000;
  for (let [a, b] of matrix_sizes) {
    if (db[b] === undefined) {
      db[b] = true;
      key.push(b);
    }
  }
  key.sort((a, b) => a - b);
  // if (matrix_sizes.length >5){
  //     return 0
  // }
  console.log(key);
  for (let i of key.slice(0, 2)) {
    let sub = f(matrix_sizes, 0, i);
    console.log(sub);
    if (sub[1] < ans) {
      ans = sub[1];
    }
  }

  return ans;
}

// 시도 11
function solution(matrix_sizes) {
  function cal(arr) {
    let n = arr.length;
    let s1 = 0,
      s2 = 0,
      fs = arr[0],
      bs = arr[n - 1];
    for (let i = 1; i < n; i++) {
      let a = arr[i],
        b = arr[n - 1 - i];
      s1 += fs[0] * fs[1] * a[1];
      fs = [fs[0], a[1]];
      s2 += bs[1] * bs[0] * b[0];
      bs = [b[0], bs[1]];
    }
    if (s1 < s2) {
      return [fs, s1];
    } else {
      return [bs, s2];
    }
  }

  function f(arr, s) {
    let n = arr.length;
    if (n > 2) {
      let min = 200;
      for (let i = 1; i < n - 1; i++) {
        let [a, b] = arr[i];
        min = Math.min(a, b, min);
      }
      if (arr[0][0] < min || arr[n - 1][1] < min) {
        let sub = cal(arr);
        arr = sub[0];
        s += sub[1];
      } else {
        let narr = [],
          sub = [];
        for (let i of arr) {
          if (i[1] === min) {
            sub.push(i);
            narr.push(sub);
            sub = [];
          } else {
            sub.push(i);
          }
        }
        if (sub.length > 0) {
          narr.push(sub);
          sub = [];
        }

        if (narr.length > 1) {
          let sub = [],
            c = 0;
          for (let i of narr) {
            let x = f(i, 0);
            sub.push(x[0]);
            c += x[1];
          }
          console.log(sub, c);
          let nsub = [],
            idx = 0,
            p = sub.length,
            xx = 0;
          while (idx < p) {
            let [a, b] = sub[idx];
            if (a === b && a === min) {
              let c1 = undefined,
                c2 = undefined;
              if (idx > 0) {
                c1 = cal([nsub[nsub.length - 1], sub[idx]]);
              }
              if (idx < p) {
                c2 = cal([sub[idx], sub[idx + 1]]);
              }
              if (c1 === undefined || c2[1] < c1[1]) {
                nsub.push(c2[0]);
                idx++;
                xx += c2[1];
              } else {
                nsub = [...nsub.slice(0, -1), c1[0]];
                xx += c1[1];
              }
            } else {
              nsub.push([a, b]);
            }
            idx++;
          }

          sub = f(nsub, 0);
          arr = sub[0];
          s += sub[1] + c + xx;
          console.log(sub[0], s);
        } else {
          narr = narr[0];
          let sub = cal(narr);
          arr = sub[0];
          s += sub[1];
        }
      }

      return [arr, s];
    } else {
      if (n === 1) {
        return [arr[0], s];
      } else {
        let [a, b] = arr;
        return [[a[0], b[1]], s + a[0] * a[1] * b[1]];
      }
    }
  }
  let ans = f(matrix_sizes, 0);

  return ans[1];
}

// 시도 11 고민중
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
