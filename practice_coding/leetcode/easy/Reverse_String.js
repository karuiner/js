/*
 *
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let l = s.length;
    for (let i = 0; i < parseInt(l / 2); i++) {
        [s[i], s[l - 1 - i]] = [s[l - 1 - i], s[i]];
    }

    return s;
};

//Runtime: 108 ms, faster than 82.00% of JavaScript online submissions for Reverse String.
//Memory Usage: 46.4 MB, less than 18.37% of JavaScript online submissions for Reverse String.

// var reverseString = function(s) {
//     s.reverse()
//     return s
// };
//Runtime: 104 ms, faster than 92.21% of JavaScript online submissions for Reverse String.
//Memory Usage: 45.5 MB, less than 89.75% of JavaScript online submissions for Reverse String.
