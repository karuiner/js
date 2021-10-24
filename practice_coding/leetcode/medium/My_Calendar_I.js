var MyCalendar = function () {
  this.books = [];
};

/*
 *
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let ans = true;
  for (let [a, b] of this.books) {
    if (
      (a <= start && start < b) ||
      (start <= a && a < end) ||
      (start < a && end > b)
    ) {
      ans = false;
      break;
    }
  }
  if (ans) {
    this.books.push([start, end]);
  }

  return ans;
};

/*
 *
 *
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// Runtime: 306 ms, faster than 39.00% of JavaScript online submissions for My Calendar I.
// Memory Usage: 48.9 MB, less than 23.00% of JavaScript online submissions for My Calendar I.
