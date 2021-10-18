var StockSpanner = function () {
  this.arr = [];
};

/*
 *
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let ans = 1;
  while (this.arr.length > 0 && this.arr[ans - 1] <= price) {
    ans++;
  }
  this.arr = [price, ...this.arr];
  return ans;
};

/*
 *
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

//Runtime: 3916 ms, faster than 5.74% of JavaScript online submissions for Online Stock Span.
//Memory Usage: 57.8 MB, less than 6.56% of JavaScript online submissions for Online Stock Span.
