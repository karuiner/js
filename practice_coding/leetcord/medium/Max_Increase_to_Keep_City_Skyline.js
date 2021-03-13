/*
 *
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    let lr = Array(grid[0].length).fill(0);
    let tb = grid.map((x, i) => {
        let k = 0;
        lr = x.map((xx, ii) => {
            k = xx > k ? xx : k;
            return xx > lr[ii] ? xx : lr[ii];
        });
        return k;
    });
    let ans = grid.reduce((acc, pp, j) => {
        return (
            acc +
            pp.reduce((acc2, x, i) => {
                return acc2 + (lr[j] <= tb[i] ? lr[j] : tb[i]) - x;
            }, 0)
        );
    }, 0);
    return ans;
};
//Runtime: 88 ms, faster than 62.88% of JavaScript online submissions for Max Increase to Keep City Skyline.
//Memory Usage: 40.3 MB, less than 36.24% of JavaScript online submissions for Max Increase to Keep City Skyline.
