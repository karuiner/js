/*
 *
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let k = n * n,
    mat = [],
    i = 0,
    j = 0,
    d = "R",
    c = 1;
  for (let i = 0; i < n; i++) {
    mat.push(Array(n).fill(0));
  }
  let rdb = { R: "D", D: "L", L: "U", U: "R" };

  function cc(i, j, d) {
    switch (d) {
      case "R":
        j++;
        break;
      case "D":
        i++;
        break;
      case "L":
        j--;
        break;
      case "U":
        i--;
        break;
      default:
        break;
    }
    return [i, j];
  }

  while (k > 0) {
    mat[i][j] = c;
    c++;
    let [si, sj] = cc(i, j, d);
    if (mat[si] === undefined || mat[si][sj] === undefined || mat[si][sj] > 0) {
      d = rdb[d];
      [si, sj] = cc(i, j, d);
    }
    [i, j] = [si, sj];
    k--;
  }

  return mat;
};

// Runtime: 77 ms, faster than 68.07% of JavaScript online submissions for Spiral Matrix II.
// Memory Usage: 44.3 MB, less than 8.27% of JavaScript online submissions for Spiral Matrix II.
