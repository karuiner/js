/*
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let get = [],
        n = nums.length;
    for (let i = 0; i < n / 2; i++) {
        if (nums[i] === target) {
            get.push(i);
        }
        if (nums[n - 1 - i] === target) {
            get.push(n - 1 - i);
        }
    }
    let ans = [];
    if (get.length > 0) {
        get.sort((x, y) => x - y);
        ans = ans.concat(get[0], get.slice(-1));
    } else {
        ans = [-1, -1];
    }

    return ans;
};
