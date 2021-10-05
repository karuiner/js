/*
 *
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let k = 0;
  while (3 ** k <= n) {
    k++;
  }
  k -= 1;
  while (n - 3 ** k >= 0) {
    n -= 3 ** k;
    if (k === 0) {
      break;
    }

    for (let j = k - 1; j >= 0; j--) {
      if (n >= 3 ** j) {
        k = j;
        break;
      }
    }
  }
  return n === 0;
};

// Runtime: 76 ms, faster than 58.82% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.
// Memory Usage: 38.8 MB, less than 61.76% of JavaScript online submissions for Check if Number is a Sum of Powers of Three.
