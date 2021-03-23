var RecentCounter = function () {
    this.db = [];
};

/*
 *
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.db.push(t);
    let k = this.db.length - 1;
    while (this.db[k] < t - 3000) {
        k++;
    }

    this.db = [...this.db.slice(k)];
    return this.db.length;
};

/*
 *
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

//Runtime: 328 ms, faster than 44.75% of JavaScript online submissions for Number of Recent Calls.
//Memory Usage: 52.9 MB, less than 24.86% of JavaScript online submissions for Number of Recent Calls.

// var RecentCounter = function() {
//     this.db=[]
// };

// /*
//  *
//  * @param {number} t
//  * @return {number}
//  */
// RecentCounter.prototype.ping = function(t) {
//     this.db.push(t)
//     this.db=[...this.db.filter((x)=>t-3000<=x && x<= t)]
//     return this.db.length

// };

// /*
//  *
//  * Your RecentCounter object will be instantiated and called as such:
//  * var obj = new RecentCounter()
//  * var param_1 = obj.ping(t)
//  */

//Runtime: 564 ms, faster than 27.62% of JavaScript online submissions for Number of Recent Calls.
//Memory Usage: 54.4 MB, less than 19.89% of JavaScript online submissions for Number of Recent Calls.
