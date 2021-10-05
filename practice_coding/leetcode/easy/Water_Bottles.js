/*
 *
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let k = 0,
    u = numBottles,
    r = 0;
  while (u + r >= numExchange) {
    k += u;
    let s = u + r;
    u = Math.floor(s / numExchange);
    r = s % numExchange;
  }

  return k + u;
};

// Runtime: 72 ms, faster than 84.85% of JavaScript online submissions for Water Bottles.
// Memory Usage: 38.8 MB, less than 9.09% of JavaScript online submissions for Water Bottles.
