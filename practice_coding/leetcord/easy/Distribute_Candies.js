/*
 *
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    let candy = {},
        l = 0.5 * candyType.length;
    for (let i of candyType) {
        candy[i] = candy[i] !== undefined ? candy[i] + 1 : 1;
    }
    let k = Object.keys(candy).length;
    return l > k ? k : l;
};
// Runtime: 336 ms, faster than 17.99% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 61.4 MB, less than 8.79% of JavaScript online submissions for Distribute Candies.
