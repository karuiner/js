/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// var smallerNumbersThanCurrent = function (nums) {
//     return nums.map((x, i) => {
//         return nums.filter((y, j) => {
//             return i !== j && y < x;
//         }).length;
//     });
// };

//Runtime: 124 ms, faster than 21.11% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
//Memory Usage: 44.4 MB, less than 12.47% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.

/*
 *
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    return nums.map((x, i) => {
        return nums.reduce((acc, y, j) => {
            acc += i !== j && y < x ? 1 : 0;
            return acc;
        }, 0);
    });
};
//Runtime: 100 ms, faster than 56.43% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
//Memory Usage: 40.5 MB, less than 45.32% of JavaScript online submissions for How Many Numbers Are Smaller Than the Current Number.
