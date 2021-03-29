/*
 *
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let db = {};
    arr1.forEach((x) => {
        db[x] = db[x] === undefined ? 1 : db[x] + 1;
    });
    let ans = [];
    for (let i of arr2) {
        ans = ans.concat(Array(db[i]).fill(Number(i)));
        delete db[i];
    }
    let k = Object.keys(db);
    if (k.length > 0) {
        k.sort((x, y) => x - y);
        for (let i of k) {
            ans = ans.concat(Array(db[i]).fill(Number(i)));
            delete db[i];
        }
    }
    return ans;
};

//Runtime: 68 ms, faster than 99.46% of JavaScript online submissions for Relative Sort Array.
//Memory Usage: 42.5 MB, less than 9.19% of JavaScript online submissions for Relative Sort Array.
