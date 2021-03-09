/*
 *
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let c = ["type", "color", "name"];
    let i = c.indexOf(ruleKey);
    let ans = items.filter((x) => x[i] === ruleValue);
    return ans.length;
};
//Runtime: 96 ms, faster than 100.00% of JavaScript online submissions for c.
//Memory Usage: 42.5 MB, less than 100.00% of JavaScript online submissions for Count Items Matching a Rule.
