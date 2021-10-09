/*
 *
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function (n, discount, products, prices) {
  this.db = {};
  for (let i = 0; i < products.length; i++) {
    this.db[products[i]] = prices[i];
  }
  this.n = n;
  this.c = 0;
  this.rate = (100 - discount) / 100;
};

/*
 *
 * @param {number[]} product
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function (product, amount) {
  let sum = 0;
  this.c++;
  for (let i = 0; i < product.length; i++) {
    sum += this.db[product[i]] * amount[i];
  }
  if (this.c % this.n === 0) {
    sum *= this.rate;
  }
  return sum;
};

/*
 *
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */

// Runtime: 172 ms, faster than 59.38% of JavaScript online submissions for Apply Discount Every n Orders.
// Memory Usage: 49.5 MB, less than 68.75% of JavaScript online submissions for Apply Discount Every n Orders.
