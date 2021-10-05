/*
 *
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let k = nums.reduce((acc, x, i) => {
        acc[i] = i > 0 ? x + acc[i - 1] : x;
        return acc;
    }, []);
    let a = k[k.length - 1];
    for (let i = 0; i < nums.length; i++) {
        let x = i > 0 ? k[i - 1] : 0;
        if (x === a - x - nums[i]) {
            return i;
        }
    }

    return -1;
};

//Runtime: 96 ms, faster than 76.54% of JavaScript online submissions for Find Pivot Index.
//Memory Usage: 43 MB, less than 22.09% of JavaScript online submissions for Find Pivot Index.
