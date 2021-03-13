/*
 *
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let ans = "",
        k = "";
    for (let i of command) {
        if (k.length > 0 || i === "(" || i === ")") {
            k += i;
            if (i === ")") {
                ans += k === "()" ? "o" : "al";
                k = "";
            }
        } else {
            ans += i;
        }
    }
    return ans;
};

//Runtime: 76 ms, faster than 81.79% of JavaScript online submissions for Goal Parser Interpretation.
//Memory Usage: 39.3 MB, less than 5.60% of JavaScript online submissions for Goal Parser Interpretation.
