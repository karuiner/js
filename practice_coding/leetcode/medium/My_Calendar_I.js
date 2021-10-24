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
