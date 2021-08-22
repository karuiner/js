/*
 *
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
  this.log = [homepage];
  this.step = 1;
};

/*
 *
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.log = [...this.log.slice(0, this.step), url];
  this.step++;
};

/*
 *
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  if (steps < this.step) {
    this.step -= steps;
  } else {
    this.step = 1;
  }
  return this.log[this.step - 1];
};

/*
 *
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  if (this.step + steps >= this.log.length) {
    this.step = this.log.length;
  } else {
    this.step += steps;
  }
  return this.log[this.step - 1];
};

/*
 *
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// Runtime: 196 ms, faster than 83.74% of JavaScript online submissions for Design Browser History.
// Memory Usage: 49.5 MB, less than 48.28% of JavaScript online submissions for Design Browser History.
