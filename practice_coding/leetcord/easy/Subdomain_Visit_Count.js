/*
 *
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let db = {};
    for (let d of cpdomains) {
        let [snum, dd] = d.split(" ");
        let s = "",
            sdd = dd.split(".");
        for (let i = sdd.length - 1; i >= 0; i--) {
            s = s.length === 0 ? sdd[i] : [sdd[i], s].join(".");
            db[s] = db[s] === undefined ? Number(snum) : Number(snum) + db[s];
        }
    }
    let ans = [];
    for (j in db) {
        ans.push(`${db[j]} ${j}`);
    }
    return ans;
};

//Runtime: 116 ms, faster than 19.43% of JavaScript online submissions for Subdomain Visit Count.
//Memory Usage: 45 MB, less than 17.81% of JavaScript online submissions for Subdomain Visit Count.
