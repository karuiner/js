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
//Runtime: 80 ms, faster than 87.23% of JavaScript online submissions for Count and Say.
//Memory Usage: 40.2 MB, less than 88.47% of JavaScript online submissions for Count and Say.
// 재귀함수용 인것 같다. 재귀함수 형식으로 바꿔서 만들어 보도록 하자
var countAndSay = function (n, str = "") {
    if (str === "" && n > 0) {
        str = countAndSay(n - 1, "1");
    } else if (n > 0) {
        let test = "",
            i = str[0],
            j = 0;
        while (str !== "") {
            if (i === str[0]) {
                j += 1;
            } else {
                test += `${j}${i}`;
                i = str[0];
                j = 1;
            }
            str = str.slice(1);
        }
        test += `${j}${i}`;
        str = countAndSay(n - 1, test);
    }
    return str;
};
//Runtime: 88 ms, faster than 49.07% of JavaScript online submissions for Count and Say.
//Memory Usage: 42.3 MB, less than 9.97% of JavaScript online submissions for Count and Say.
