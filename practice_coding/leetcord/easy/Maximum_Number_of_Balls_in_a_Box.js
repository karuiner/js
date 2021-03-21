/*
 *
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function (lowLimit, highLimit) {
    let db = {},
        ans = 0;
    for (let i = lowLimit; i < highLimit + 1; i++) {
        let k = String(i)
            .split("")
            .reduce((x, y) => Number(x) + Number(y), 0);
        db[k] = db[k] === undefined ? 1 : db[k] + 1;
        ans = db[k] > ans ? db[k] : ans;
    }
    return ans;
};

//Runtime: 212 ms, faster than 37.07% of JavaScript online submissions for Maximum Number of Balls in a Box.
//Memory Usage: 53.2 MB, less than 43.02% of JavaScript online submissions for Maximum Number of Balls in a Box.
