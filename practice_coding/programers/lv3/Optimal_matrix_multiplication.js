//최적의 행렬 곱셈

// 시도  1
function solution(matrix_sizes) {
  let ans = 0,
    p = [],
    n = matrix_sizes.length,
    data = [...matrix_sizes];
  while (n > 1) {
    let k = 0,
      mx = 0;
    for (let i = 0; i < n - 1; i++) {
      let a = data[i],
        b = data[i + 1];
      if (b[0] > b[1] && b[0] > a[0]) {
        if (b[0] > mx) {
          mx = b[0];
          k = i;
        }
      }
    }

    let a = data[k],
      b = data[k + 1];
    data = [...data.slice(0, k), [a[0], b[1]], ...data.slice(k + 2)];
    ans += a[0] * b[0] * b[1];
    n--;
  }

  return ans;
}
