let removeDuplicates = function (nums) {
    let ans = [],
        i = 0;
    while (ans.length < nums.length) {
        if (ans.indexOf(nums[i]) >= 0) {
            nums.splice(i, 1);
        } else {
            ans.push(nums[i]);
            i++;
        }
    }
    return ans.length;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// nums is passed in by reference. (i.e., without making a copy)
let len = removeDuplicates(nums);
let ans = [0, 1, 2, 3, 4];
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
// for (let i = 0; i < len; i++) {
//     console.log(nums[i]);
// }
console.log(nums, ans);
