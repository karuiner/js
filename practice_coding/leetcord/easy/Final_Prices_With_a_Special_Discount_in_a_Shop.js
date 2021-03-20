/*
 *
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    return prices.map((x, i, arr) => {
        for (y of arr.slice(i + 1)) {
            if (y <= x) {
                x -= y;
                break;
            }
        }

        return x;
    });
};

//Runtime: 88 ms, faster than 69.71% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
//Memory Usage: 44.8 MB, less than 7.82% of JavaScript online submissions for Final Prices With a Special Discount in a Shop.
