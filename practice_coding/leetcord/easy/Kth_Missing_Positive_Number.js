/*
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let l = arr.length;
    if (arr[l - 1] - l < k) {
        return k + l;
    } else {
        l--;
        while (arr[l - 1] - l >= k) {
            l--;
        }
        return k + l;
    }
};

//Runtime: 72 ms, faster than 97.66% of JavaScript online submissions for Kth Missing Positive Number.
//Memory Usage: 38.8 MB, less than 64.72% of JavaScript online submissions for Kth Missing Positive Number.
