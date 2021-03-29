/*
 *
 * @param {number} n
 */
var OrderedStream = function (n) {
    this.n = n;
    this.out = 0;
    this.data = Array(n).fill(-1);
};

/*
 *
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
    let ans = [];
    this.data[idKey - 1] = value;
    for (let i = this.out; i < this.n; i++) {
        if (this.data[i] === -1) break;
        ans.push(this.data[i]);
        this.out = i + 1;
    }
    return ans;
};

/*
 *
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */

//Runtime: 192 ms, faster than 59.11% of JavaScript online submissions for Design an Ordered Stream.
//Memory Usage: 50.2 MB, less than 91.90% of JavaScript online submissions for Design an Ordered Stream.
