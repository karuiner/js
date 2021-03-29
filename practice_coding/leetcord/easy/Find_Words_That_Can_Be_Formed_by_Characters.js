/*
 *
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let db = {};
    for (let i of chars) {
        db[i] = db[i] === undefined ? 1 : db[i] + 1;
    }
    return words.reduce((acc, x) => {
        let sdb = {},
            check = true;
        for (let i of x) {
            if (db[i] !== undefined) {
                sdb[i] = sdb[i] === undefined ? db[i] - 1 : sdb[i] - 1;
                if (sdb[i] < 0) {
                    check = false;
                    break;
                }
            } else {
                check = false;
                break;
            }
        }
        if (check) {
            acc += x.length;
        }
        return acc;
    }, 0);
};

//Runtime: 192 ms, faster than 56.63% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
//Memory Usage: 57.2 MB, less than 21.08% of JavaScript online submissions for Find Words That Can Be Formed by Characters.
