/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let db = {};
    for (let i of nums) {
        db[i] = db[i] === undefined ? 1 : db[i];
    }
    let ans = Object.keys(db);
    ans.sort((x, y) => y - x);
    return ans.length < 3 ? ans[0] : ans[2];
};
//Runtime: 88 ms, faster than 31.20% of JavaScript online submissions for Third Maximum Number.
//Memory Usage: 41.6 MB, less than 13.25% of JavaScript online submissions for Third Maximum Number.
