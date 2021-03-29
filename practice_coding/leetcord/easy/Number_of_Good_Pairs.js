/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let n = nums.reduce(function (acc, x, i, arr) {
        return acc + arr.slice(i + 1).filter((y) => x === y).length;
    }, 0);
    return n;
};
//Runtime: 72 ms, faster than 93.76% of JavaScript online submissions for Number of Good Pairs.
//Memory Usage: 40.3 MB, less than 5.27% of JavaScript online submissions for Number of Good Pairs.
