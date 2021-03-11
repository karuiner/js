/*
 *
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    return s
        .split("")
        .reduce((acc, x, i) => {
            acc[indices[i]] = x;
            return acc;
        }, [])
        .join("");
};

//Runtime: 96 ms, faster than 40.42% of JavaScript online submissions for Shuffle String.
//Memory Usage: 40.6 MB, less than 26.31% of JavaScript online submissions for Shuffle String.
