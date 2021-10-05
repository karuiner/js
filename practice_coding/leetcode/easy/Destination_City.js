/*
 *
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let db = {};
    for (let [s, e] of paths) {
        db[s] = db[s] === undefined || db[s] === "end" ? e : db[s];
        db[e] = db[e] === undefined ? "end" : db[e];
    }
    let e = Object.keys(db).filter((x) => db[x] === "end");
    return e[0];
};

//Runtime: 84 ms, faster than 69.42% of JavaScript online submissions for Destination City.
//Memory Usage: 41.8 MB, less than 16.04% of JavaScript online submissions for Destination City.
