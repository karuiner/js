/*
 *
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    allowed = allowed.split("");
    let ans = words.reduce((acc, x) => {
        let check = true;
        for (let i of x) {
            if (!allowed.includes(i)) {
                check = false;
                break;
            }
        }
        return check ? acc + 1 : acc;
    }, 0);
    return ans;
};
//Runtime: 128 ms, faster than 49.67% of JavaScript online submissions for Count the Number of Consistent Strings.
//Memory Usage: 47.7 MB, less than 90.05% of JavaScript online submissions for Count the Number of Consistent Strings.
