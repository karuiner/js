/*
 *
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */
var maxIceCream = function (costs, coins) {
  costs.sort((a, b) => a - b);
  let ans = 0,
    s = 0;
  if (coins < costs[0]) return ans;
  for (let i of costs) {
    if (s + i <= coins) {
      ans++;
      s += i;
    } else {
      break;
    }
  }
  return ans;
};

//Runtime: 216 ms, faster than 100.00% of JavaScript online submissions for Maximum Ice Cream Bars.
//Memory Usage: 51.9 MB, less than 100.00% of JavaScript online submissions for Maximum Ice Cream Bars.
