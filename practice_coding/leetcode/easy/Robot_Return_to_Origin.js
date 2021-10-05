/*
 *
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let x = 0,
        y = 0;
    for (let i of moves) {
        x += i === "R" ? 1 : i === "L" ? -1 : 0;
        y += i === "U" ? 1 : i === "D" ? -1 : 0;
    }

    return x === 0 && y === 0;
};
//Runtime: 92 ms, faster than 48.70% of JavaScript online submissions for Robot Return to Origin.
//Memory Usage: 39.7 MB, less than 71.11% of JavaScript online submissions for Robot Return to Origin.
