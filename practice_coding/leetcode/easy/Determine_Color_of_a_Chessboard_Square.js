/*
 *
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  let [a, b] = coordinates.split("");
  let [i, j] = [a.charCodeAt(0) - "a".charCodeAt(0) + 1, Number(b)];
  if (Math.abs(i - j) % 2 === 0) {
    return false;
  } else {
    return true;
  }
};
// Runtime: 80 ms, faster than 66.67% of JavaScript online submissions for Determine Color of a Chessboard Square.
// Memory Usage: 39 MB, less than 7.77% of JavaScript online submissions for Determine Color of a Chessboard Square.
