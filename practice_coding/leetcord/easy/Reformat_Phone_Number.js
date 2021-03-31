/*
 *
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
    let nn = "";
    for (i of number) {
        if (!isNaN(i) && i !== " ") nn += i;
    }
    let ans = "",
        l = nn.length;
    while (l > 0) {
        if (l < 3) {
            ans += nn.substring(0, 2);
            l -= 2;
        } else if (l < 4) {
            ans += nn.substring(0, 3);
            l -= 3;
        } else if (l < 5) {
            ans += nn.substring(0, 2) + "-" + nn.substring(2, 4);
            l -= 4;
        } else {
            ans += nn.substring(0, 3);
            nn = nn.substring(3);
            l -= 3;
        }
        if (l > 0) ans += "-";
    }

    return ans;
};

//Runtime: 80 ms, faster than 70.93% of JavaScript online submissions for Reformat Phone Number.
//Memory Usage: 39 MB, less than 56.98% of JavaScript online submissions for Reformat Phone Number.
