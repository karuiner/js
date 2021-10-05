/*
 *
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    return grid.reduce((acc, x, i) => {
        return (
            acc +
            x.reduce((acc2, y, j) => {
                let ans = 0;
                if (y === 1) {
                    ans = 4;
                    if (grid[i + 1] !== undefined) if (grid[i + 1][j] === 1) ans -= 1;
                    if (grid[i - 1] !== undefined) if (grid[i - 1][j] === 1) ans -= 1;
                    if (grid[i][j - 1] !== undefined) if (grid[i][j - 1] === 1) ans -= 1;
                    if (grid[i][j + 1] !== undefined) if (grid[i][j + 1] === 1) ans -= 1;
                }
                return acc2 + ans;
            }, 0)
        );
    }, 0);
};

//Runtime: 196 ms, faster than 72.68% of JavaScript online submissions for Island Perimeter.
//Memory Usage: 49.4 MB, less than 22.31% of JavaScript online submissions for Island Perimeter.
