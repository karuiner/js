let removeElement = function (nums, val) {
    let n = nums.indexOf(val);
    while (n >= 0) {
        if (n >= 0) {
            nums.splice(n, 1);
            n = nums.indexOf(val);
        }
    }
    return nums.length;
};

let nums = [0, 1, 2, 2, 3, 0, 4, 2],
    val = 2;
// nums is passed in by reference. (i.e., without making a copy)
let len = removeElement(nums, val);
let ans = [0, 1, 3, 0, 4];
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (let i = 0; i < len; i++) {
//     print(nums[i]);
// }
console.log(nums, ans);
