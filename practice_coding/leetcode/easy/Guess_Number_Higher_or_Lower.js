/*
 *
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/*
 *
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let a = 1,
        b = n;
    if (guess(a) === 0 || guess(b) === 0) {
        return guess(a) === 0 ? a : b;
    }
    while (b - a > 1) {
        let m = parseInt(0.5 * (b + a));
        if (guess(m) > 0) {
            a = m;
        } else if (guess(m) < 0) {
            b = m;
        } else {
            return m;
        }
    }

    return guess(a) === 0 ? a : b;
};

// Runtime: 76 ms, faster than 74.19% of JavaScript online submissions for Guess Number Higher or Lower.
// Memory Usage: 38.7 MB, less than 6.20% of JavaScript online submissions for Guess Number Higher or Lower.
