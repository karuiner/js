/*
 *
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let n = boxes.length;
    let ans = Array(n).fill(0);
    let bi = boxes.split("").reduce((acc, x, i) => {
        if (x === "1") acc.push(i);
        return acc;
    }, []);
    return ans.map((x, i) => {
        return bi.reduce((acc, y) => {
            acc += Math.abs(i - y);
            return acc;
        }, 0);
    });
};
//Runtime: 192 ms, faster than 100.00% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
//Memory Usage: 42.6 MB, less than 100.00% of JavaScript online submissions for Minimum Number of Operations to Move All Balls to Each Box.
