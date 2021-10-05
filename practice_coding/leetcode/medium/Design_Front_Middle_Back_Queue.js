var FrontMiddleBackQueue = function () {
  this.queue = [];
  this.n = 0;
};

/*
 *
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.queue.splice(0, 0, val);
  this.n++;
};

/*
 *
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  let n = this.n;
  let k = n % 2 ? Math.floor(n / 2) : Math.floor(n / 2);
  this.queue.splice(k, 0, val);
  this.n++;
};

/*
 *
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  this.queue.splice(this.n, 0, val);
  this.n++;
};

/*
 *
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function () {
  let val = -1;
  if (this.n > 0) {
    val = this.queue.splice(0, 1);
    this.n--;
  }
  return val;
};

/*
 *
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function () {
  let val = -1;
  if (this.n > 0) {
    let n = this.n;
    let k = n % 2 ? Math.floor(n / 2) : Math.floor((n - 1) / 2);
    val = this.queue.splice(k, 1);
    this.n--;
  }
  return val;
};

/*
 *
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function () {
  let val = -1;
  if (this.n > 0) {
    this.n--;
    val = this.queue.splice(this.n, 1);
  }
  return val;
};

/*
 *
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */

// Runtime: 165 ms, faster than 40.91% of JavaScript online submissions for Design Front Middle Back Queue.
// Memory Usage: 46.3 MB, less than 45.45% of JavaScript online submissions for Design Front Middle Back Queue.
