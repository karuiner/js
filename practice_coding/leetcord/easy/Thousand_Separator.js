/*
 *
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    let ans = "",
        sn = String(n),
        l = sn.length;
    for (i = l - 1; i >= 0; i--) {
        if ((l - i - 1) % 3 === 0 && l - i - 1 > 1) {
            ans = `${sn[i]}.${ans}`;
        } else {
            ans = `${sn[i]}${ans}`;
        }
    }
    return ans;
};

//Runtime: 72 ms, faster than 92.96% of JavaScript online submissions for Thousand Separator.
//Memory Usage: 38.8 MB, less than 39.70% of JavaScript online submissions for Thousand Separator.
