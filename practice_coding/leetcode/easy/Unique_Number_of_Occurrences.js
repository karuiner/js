/*
 *
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    let db = {},
        oc = {};
    for (let i of arr) {
        db[i] = db[i] === undefined ? 1 : db[i] + 1;
    }
    for (let i in db) {
        if (oc[db[i]] === undefined) {
            oc[db[i]] = i;
        } else {
            return false;
        }
    }

    return true;
};

//Runtime: 72 ms, faster than 96.73% of JavaScript online submissions for Unique Number of Occurrences.
//Memory Usage: 39 MB, less than 66.25% of JavaScript online submissions for Unique Number of Occurrences.
