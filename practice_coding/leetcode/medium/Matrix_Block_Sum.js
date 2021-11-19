/*
 *
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, k) {
  let m = mat.length,
    n = mat[0].length;
  return mat.map((x, i, arr) => {
    return x.map((v, j) => {
      let ia = i - k >= 0 ? i - k : 0,
        ib = i + k < m ? i + k : m - 1;
      let ja = j - k >= 0 ? j - k : 0,
        jb = j + k < n ? j + k : n - 1;
      let ans = 0;
      for (let l = ia; l <= ib; l++) {
        for (let h = ja; h <= jb; h++) {
          ans += arr[l][h];
        }
      }
      return ans;
    });
  });
};

// Runtime: 176 ms, faster than 27.78% of JavaScript online submissions for Matrix Block Sum.
// Memory Usage: 40.5 MB, less than 96.53% of JavaScript online submissions for Matrix Block Sum.
