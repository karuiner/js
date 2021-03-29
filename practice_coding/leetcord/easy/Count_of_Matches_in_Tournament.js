/*
 *
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    let ans = 0;
    while (n > 1) {
        ans += parseInt(n / 2);
        n = n % 2 ? parseInt(n / 2) + 1 : n / 2;
    }
    return ans;
};
//Runtime: 76 ms, faster than 83.98% of JavaScript online submissions for Count of Matches in Tournament.
//Memory Usage: 38.6 MB, less than 56.47% of JavaScript online submissions for Count of Matches in Tournament.
