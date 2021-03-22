/*
 *
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    const n = A.length / 2,
        db = {};
    for (let i of A) {
        db[i] = db[i] === undefined ? 1 : db[i] + 1;
        if (db[i] > 1) {
            return i;
        }
    }
};

//Runtime: 80 ms, faster than 90.80% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
//Memory Usage: 41.8 MB, less than 86.49% of JavaScript online submissions for N-Repeated Element in Size 2N Array.
