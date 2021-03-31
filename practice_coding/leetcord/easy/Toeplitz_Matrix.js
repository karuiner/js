/*
 *
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let l = matrix.length,
        m = matrix[0].length,
        k = l + m - 1,
        x = l - 1,
        y = 0;
    for (let i = 0; i < k; i++) {
        let [a, b] = [x, y],
            z = matrix[a][b];
        while (matrix[a] !== undefined && matrix[a][b] !== undefined) {
            if (z !== matrix[a][b]) return false;
            a++;
            b++;
        }
        if (x > 0) {
            x--;
        } else {
            y++;
        }
    }

    return true;
};

//Runtime: 80 ms, faster than 96.63% of JavaScript online submissions for Toeplitz Matrix.
//Memory Usage: 40.6 MB, less than 53.56% of JavaScript online submissions for Toeplitz Matrix.
