/*
 *
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    return accounts.reduce((acc, x) => {
        let sum = x.reduce((x, y) => x + y);
        return acc > sum ? acc : sum;
    }, 0);
};
//Runtime: 76 ms, faster than 81.69% of JavaScript online submissions for Richest Customer Wealth.
//Memory Usage: 38.6 MB, less than 65.56% of JavaScript online submissions for Richest Customer Wealth.
