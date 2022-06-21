//최적의 행렬 곱셈

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
