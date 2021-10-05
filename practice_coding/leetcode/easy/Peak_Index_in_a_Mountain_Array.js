/*
 *
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let a = 0,
        b = arr.length - 1;
    let m = parseInt((a + b) / 2);
    if (arr[0] > arr[1]) return 0;
    if (arr[b] > arr[b - 1]) return b;

    while (arr[m - 1] > arr[m] || arr[m + 1] > arr[m]) {
        if (arr[m + 1] > arr[m]) {
            a = m;
        } else if (arr[m - 1] > arr[m]) {
            b = m;
        }
        m = parseInt((a + b) / 2);
    }

    return m;
};

//Runtime: 76 ms, faster than 85.59% of JavaScript online submissions for Peak Index in a Mountain Array.
//Memory Usage: 39.5 MB, less than 39.53% of JavaScript online submissions for Peak Index in a Mountain Array.
