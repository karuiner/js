/*
 *
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    ans = [];
    for (let i = left; i < right + 1; i++) {
        let p = String(i).split("").map(Number),
            c = true;
        for (let j of p) {
            if (i % j || j === 0) {
                c = false;
                break;
            }
        }
        if (c) {
            ans.push(i);
        }
    }
    return ans;
};

//Runtime: 84 ms, faster than 75.21% of JavaScript online submissions for Self Dividing Numbers.
//Memory Usage: 45.4 MB, less than 8.55% of JavaScript online submissions for Self Dividing Numbers.
