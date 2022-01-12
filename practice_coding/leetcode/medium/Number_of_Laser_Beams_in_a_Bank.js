/*
 *
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  let a = 0,
    ans = 0;
  for (let i of bank) {
    let c = 0;
    for (let j of i) {
      c += Number(j);
    }
    if (c > 0) {
      if (a === 0) {
        a = c;
      } else {
        ans += a * c;
        a = c;
      }
    }
  }
  return ans;
};

// Runtime: 196 ms, faster than 30.56% of JavaScript online submissions for Number of Laser Beams in a Bank.
// Memory Usage: 48 MB, less than 69.44% of JavaScript online submissions for Number of Laser Beams in a Bank.
