//최적의 행렬 곱셈

// 시도 4 반례 보완
function solution(matrix_sizes) {
  function f(mat, s) {
    if (mat.length === 1) {
      return s;
    }

    let k = -1,
      size = 0,
      m = 0,
      arr = [],
      value = 0;
    for (let i = 0; i < mat.length - 1; i++) {
      let a = mat[i],
        b = mat[i + 1];
      if (k < 0 || (a[0] <= a[1] && b[1] <= b[0])) {
        k = i;
        m = a[1];
        size = a[0] * b[1];
        arr = [a[0], b[1]];
        value = a[0] * a[1] * b[1];
      }
    }

    return f([...mat.slice(0, k), arr, ...mat.slice(k + 2)], s + value);
  }

  return f(matrix_sizes, 0);
}
// 시도 2
function solution(matrix_sizes) {
  function f(mat, s) {
    if (mat.length === 1) {
      return s;
    }

    let k = -1,
      size = 0,
      m = 0,
      arr = [],
      value = 0;
    for (let i = 0; i < mat.length - 1; i++) {
      let a = mat[i],
        b = mat[i + 1];
      if (k < 0 || (m < a[1] && a[0] * b[1] < size)) {
        k = i;
        m = a[1];
        size = a[0] * b[1];
        arr = [a[0], b[1]];
        value = a[0] * a[1] * b[1];
      }
    }

    return f([...mat.slice(0, k), arr, ...mat.slice(k + 2)], s + value);
  }

  return f(matrix_sizes, 0);
}
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
  let arr = mf(4, 10);
  let a = solution(arr),
    b = solutiont(arr);
  console.log(arr, a, b);
  ccc++;
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
