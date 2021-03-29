/*
 *
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let k = parseInt(n / 7),
        l = n % 7,
        ans = 0;
    ans += (2 * k + l + 1) * (l / 2);
    if (k > 0) {
        ans += 28 * k + k * ((k - 1) / 2) * 7;
    }
    return ans;
};

//Runtime: 72 ms, faster than 95.16% of JavaScript online submissions for Calculate Money in Leetcode Bank.
//Memory Usage: 38.6 MB, less than 58.06% of JavaScript online submissions for Calculate Money in Leetcode Bank.
