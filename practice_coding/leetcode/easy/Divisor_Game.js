/*
 *
 * @param {number} n
 * @return {boolean}
 */
var divisorGame = function (n) {
  let ans = false,
    x = 1;
  while (x < n) {
    let ck = false;
    for (let i = 1; i <= parseInt(n / 2); i++) {
      if (n % i === 0) {
        x = i;
        ck = true;
        break;
      }
    }
    if (ck) {
      ans = !ans;
      n = n - x;
    } else {
      return ans;
    }
  }
  return ans;
};

//Runtime: 80 ms, faster than 52.57% of JavaScript online submissions for Divisor Game.
//Memory Usage: 38.4 MB, less than 57.21% of JavaScript online submissions for Divisor Game.
