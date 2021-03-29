/*
 *
 * @param {string} n
 * @return {number}
 */
var minPartitions = function (n) {
    let ans = 0;
    for (let i of n) {
        ans = Number(i) > ans ? Number(i) : ans;
    }

    return ans;
};
//Runtime: 92 ms, faster than 85.71% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
//Memory Usage: 43.6 MB, less than 67.24% of JavaScript online submissions for Partitioning Into Minimum Number Of Deci-Binary Numbers.
