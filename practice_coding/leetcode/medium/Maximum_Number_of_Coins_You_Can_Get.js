/*
 *
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function (piles) {
  piles.sort((a, b) => b - a);
  let n = piles.length / 3,
    ans = 0;
  for (let i = 0; i < n; i++) {
    let k = i * 2 + 1;
    ans += piles[k];
  }
  return ans;
};

// Runtime: 212 ms, faster than 60.16% of JavaScript online submissions for Maximum Number of Coins You Can Get.
// Memory Usage: 49.7 MB, less than 31.71% of JavaScript online submissions for Maximum Number of Coins You Can Get.
