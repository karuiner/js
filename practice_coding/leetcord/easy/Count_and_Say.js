/*
 *
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let ans = "0",
        p,
        k,
        pans;
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            k = 0;
            p = undefined;
            pans = ans;
            ans = "";
            for (let j of pans) {
                if (p === undefined) {
                    p = j;
                    k += 1;
                } else {
                    if (j === p) {
                        k += 1;
                    } else {
                        ans += `${k}${p}`;
                        p = j;
                        k = 1;
                    }
                }
            }
            ans += `${k}${p}`;
        } else {
            ans = "1";
        }
    }
    return ans;
};
// 재귀함수용 인것 같다. 재귀함수 형식으로 바꿔서 만들어 보도록 하자
