/*
 *
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    let l = mat.length;
    return mat.reduce((acc, x, i) => {
        return i === l - 1 - i ? acc + x[i] : acc + x[i] + x[l - i - 1];
    }, 0);
};

//Runtime: 72 ms, faster than 97.10% of JavaScript online submissions for Matrix Diagonal Sum.
//Memory Usage: 40.6 MB, less than 53.41% of JavaScript online submissions for Matrix Diagonal Sum.
