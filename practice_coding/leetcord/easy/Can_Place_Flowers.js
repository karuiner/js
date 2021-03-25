/*
 *
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let ans = 0,
        k = flowerbed[0] !== 1 ? 1 : 0;
    for (let i of flowerbed) {
        if (i === 1) {
            ans += parseInt((k - 1) / 2);
            k = 0;
        } else {
            k++;
        }
    }
    ans += parseInt(k / 2);

    return n <= ans;
};

//Runtime: 88 ms, faster than 57.64% of JavaScript online submissions for Can Place Flowers.
//Memory Usage: 40.8 MB, less than 15.28% of JavaScript online submissions for Can Place Flowers.
