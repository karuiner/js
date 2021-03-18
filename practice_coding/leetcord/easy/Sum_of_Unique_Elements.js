/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let db = {},
        ans = 0;
    nums.forEach((x) => (db[x] = db[x] === undefined ? 1 : db[x] + 1));
    for (let i of Object.keys(db)) {
        ans += db[i] === 1 ? Number(i) : 0;
    }
    return ans;
};
//Runtime: 80 ms, faster than 63.33% of JavaScript online submissions for Sum of Unique Elements.
//Memory Usage: 38.5 MB, less than 81.66% of JavaScript online submissions for Sum of Unique Elements.
