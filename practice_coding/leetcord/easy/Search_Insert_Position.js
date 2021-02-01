/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let searchInsert = function (nums, target) {
    return nums.filter((x) => x < target).length;
};

let nums = [1, 3, 5, 6],
    target = 5;
console.log(searchInsert(nums, target));
