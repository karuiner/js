/*
 *
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let l = 0,
        ans = 0;
    s.split("").forEach((x) => {
        if (x === "(") {
            l += 1;
            ans = l > ans ? l : ans;
        }
        if (x === ")") {
            l -= 1;
        }
    });

    return ans;
};

//Runtime: 68 ms, faster than 99.17% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
//Memory Usage: 38.9 MB, less than 26.87% of JavaScript online submissions for Maximum Nesting Depth of the Parentheses.
