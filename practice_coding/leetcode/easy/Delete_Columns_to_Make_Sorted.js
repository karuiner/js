/*
 *
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    let l = strs[0].length,
        m = strs.length,
        ans = 0;
    for (let i = 0; i < l; i++) {
        let s = "",
            check = false;
        for (let j = 0; j < m; j++) {
            if (strs[j][i] >= s) {
                s = strs[j][i];
            } else {
                check = true;
                break;
            }
        }
        if (check) {
            ans += 1;
        }
    }

    return ans;
};
//Runtime: 88 ms, faster than 76.30% of JavaScript online submissions for Delete Columns to Make Sorted.
//Memory Usage: 42.9 MB, less than 48.89% of JavaScript online submissions for Delete Columns to Make Sorted.
