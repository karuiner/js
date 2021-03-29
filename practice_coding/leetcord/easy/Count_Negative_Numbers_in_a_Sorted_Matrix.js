/*
 *
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    return grid.reduce((acc, x) => {
        return (
            acc +
            x.reduce((acc, x) => {
                return x < 0 ? acc + 1 : acc;
            }, 0)
        );
    }, 0);
};
//Runtime: 72 ms, faster than 98.29% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
//Memory Usage: 40.3 MB, less than 47.98% of JavaScript online submissions for Count Negative Numbers in a Sorted Matrix.
