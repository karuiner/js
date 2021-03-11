/*
 *
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let [a, b] = String(n)
        .split("")
        .reduce((acc, x) => [acc[0] * Number(x), acc[1] + Number(x)], [1, 0]);
    return a - b;
};
//Runtime: 80 ms, faster than 59.34% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
//Memory Usage: 38.7 MB, less than 61.41% of JavaScript online submissions for Subtract the Product and Sum of Digits of an Integer.
