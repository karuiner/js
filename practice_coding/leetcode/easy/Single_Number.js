/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let db = {},
        l = nums.length;
    if (nums.length % 2) {
        db[nums[0]] = 1;
        nums = nums.slice(1);
        l--;
    }

    for (let i = 0; i < l / 2; i++) {
        db[nums[i]] = db[nums[i]] === undefined ? 1 : db[nums[i]] + 1;
        db[nums[l - i - 1]] = db[nums[l - i - 1]] === undefined ? 1 : db[nums[l - i - 1]] + 1;
    }
    for (let i in db) {
        if (db[i] === 1) return Number(i);
    }
};
//Runtime: 96 ms, faster than 54.69% of JavaScript online submissions for Single Number.
//Memory Usage: 45.5 MB, less than 9.89% of JavaScript online submissions for Single Number.
