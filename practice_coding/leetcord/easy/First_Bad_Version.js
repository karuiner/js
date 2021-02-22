/*
 *
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/*
 *
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /*
     *
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let [a, b] = [1, n];
        while (a !== b && b - a > 1) {
            let m = parseInt(0.5 * (a + b));
            if (isBadVersion(m)) {
                b = m;
            } else {
                a = m;
            }
        }

        return isBadVersion(a) ? a : b;
    };
};
// Runtime: 68 ms, faster than 97.30% of JavaScript online submissions for First Bad Version.
// Memory Usage: 38.5 MB, less than 41.34% of JavaScript online submissions for First Bad Version.
