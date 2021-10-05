/*
 *
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let clist = s.split("").reduce((acc, x, i) => acc.concat(x === c ? i : []), []);
    return s.split("").map((x, i) => {
        if (i <= clist[0]) return clist[0] - i;
        if (i >= clist[clist.length - 1]) return i - clist[clist.length - 1];
        let j = 1;
        while (i > clist[j]) {
            j++;
        }
        return i - clist[j - 1] < clist[j] - i ? i - clist[j - 1] : clist[j] - i;
    });
};

//Runtime: 88 ms, faster than 75.96% of JavaScript online submissions for Shortest Distance to a Character.
//Memory Usage: 41.2 MB, less than 25.45% of JavaScript online submissions for Shortest Distance to a Character.
