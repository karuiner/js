/*
 *
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
    return arr.reduce((acc, x, i) => {
        let sub = arr.slice(i + 1),
            check = 0;
        sub.forEach((y, j) => {
            if (Math.abs(x - y) <= a) {
                let sub2 = sub.slice(j + 1);
                sub2.forEach((z, k) => {
                    if (Math.abs(y - z) <= b && Math.abs(x - z) <= c) {
                        check += 1;
                    }
                });
            }
        });

        return acc + check;
    }, 0);
};

//Runtime: 96 ms, faster than 39.17% of JavaScript online submissions for Count Good Triplets.
//Memory Usage: 44.2 MB, less than 12.04% of JavaScript online submissions for Count Good Triplets.
