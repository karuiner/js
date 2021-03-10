/*
 *
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
    this.data = [...rectangle];
};

/*
 *
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
    [row1, row2] = row1 < row2 ? [row1, row2] : [row2, row1];
    [col1, col2] = col1 < col2 ? [col1, col2] : [col2, col1];
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            this.data[i][j] = newValue;
        }
    }
};

/*
 *
 * @param {number} row
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    return this.data[row][col];
};

/*
 *
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */
//Runtime: 100 ms, faster than 98.18% of JavaScript online submissions for Subrectangle Queries.
//Memory Usage: 45.2 MB, less than 21.21% of JavaScript online submissions for Subrectangle Queries.

let subrectangleQueries = new SubrectangleQueries([
    [1, 2, 1],
    [4, 3, 4],
    [3, 2, 1],
    [1, 1, 1],
]);
console.log(subrectangleQueries.data);
// The initial rectangle (4x3) looks like:
// 1 2 1
// 4 3 4
// 3 2 1
// 1 1 1
console.log(subrectangleQueries.getValue(0, 2)); // return 1
subrectangleQueries.updateSubrectangle(0, 0, 3, 2, 5);
console.log(subrectangleQueries.data);
// After this update the rectangle looks like:
// 5 5 5
// 5 5 5
// 5 5 5
// 5 5 5
console.log(subrectangleQueries.getValue(0, 2)); // return 5
console.log(subrectangleQueries.getValue(3, 1)); // return 5
subrectangleQueries.updateSubrectangle(3, 0, 3, 2, 10);
console.log(subrectangleQueries.data);
// After this update the rectangle looks like:
// 5   5   5
// 5   5   5
// 5   5   5
// 10  10  10
console.log(subrectangleQueries.getValue(3, 1)); // return 10
console.log(subrectangleQueries.getValue(0, 2)); // return 5
