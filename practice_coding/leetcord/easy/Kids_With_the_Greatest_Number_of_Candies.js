/*
 *
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let mx = candies.reduce((x, y) => (x > y ? x : y));
    let ans = candies.map((x) => {
        return x + extraCandies >= mx;
    });

    return ans;
};

//Runtime: 72 ms, faster than 96.43% of JavaScript online submissions for Kids With the Greatest Number of Candies.
//Memory Usage: 38.7 MB, less than 70.96% of JavaScript online submissions for Kids With the Greatest Number of Candies.
