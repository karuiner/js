/*
 *
 * @param {number[]} balance
 */
var Bank = function (balance) {
  this.balance = balance;
};

/*
 *
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function (account1, account2, money) {
  let ans = false;
  if (
    this.balance[account1 - 1] !== undefined &&
    this.balance[account2 - 1] !== undefined &&
    this.balance[account1 - 1] >= money
  ) {
    this.balance[account1 - 1] -= money;
    this.balance[account2 - 1] += money;
    ans = !ans;
  }
  return ans;
};

/*
 *
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function (account, money) {
  let ans = false;
  if (this.balance[account - 1] !== undefined) {
    this.balance[account - 1] += money;
    ans = !ans;
  }
  return ans;
};

/*
 *
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function (account, money) {
  let ans = false;
  if (
    this.balance[account - 1] !== undefined &&
    this.balance[account - 1] >= money
  ) {
    this.balance[account - 1] -= money;
    ans = !ans;
  }
  return ans;
};

/*
 *
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */

// Runtime: 388 ms, faster than 82.80% of JavaScript online submissions for Simple Bank System.
// Memory Usage: 75.4 MB, less than 80.64% of JavaScript online submissions for Simple Bank System.
