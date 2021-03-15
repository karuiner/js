/*
 *
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let p = String(num),
        str = "",
        c = 1,
        k = 0;
    for (let i of p) {
        if (c > 0 && i === "6") {
            str += "9";
            c -= 1;
        } else {
            str += i;
        }
        k += 1;
    }
    return Number(str);
};

//Runtime: 68 ms, faster than 98.82% of JavaScript online submissions for Maximum 69 Number.
//Memory Usage: 38.8 MB, less than 39.96% of JavaScript online submissions for Maximum 69 Number.
