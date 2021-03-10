/*
 *
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    db = {};
    for (let i of jewels) {
        db[i] = 0;
    }

    for (let i of stones) {
        if (db[i] !== undefined) {
            db[i] += 1;
        }
    }

    return Object.keys(db).reduce((acc, x) => acc + db[x], 0);
};

//Runtime: 96 ms, faster than 24.65% of JavaScript online submissions for Jewels and Stones.
//Memory Usage: 40.6 MB, less than 18.49% of JavaScript online submissions for Jewels and Stones.
// 정규 표현 식 연습 할 것
var numJewelsInStones = function (jewels, stones) {
    let ans = 0;
    for (let i of jewels) {
        let l = stones.match(new RegExp(`${i}`, "g"));
        ans += l !== null ? l.length : 0;
    }
    return ans;
};
//Runtime: 96 ms, faster than 24.65% of JavaScript online submissions for Jewels and Stones.
//Memory Usage: 40.1 MB, less than 35.58% of JavaScript online submissions for Jewels and Stones.
