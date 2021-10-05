/*
 *
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => b - a);
  let ans = [];
  for (let i of deck) {
    ans = [i, ...ans.slice(-1), ...ans.slice(0, -1)];
  }
  return ans;
};

// Runtime: 112 ms, faster than 11.11% of JavaScript online submissions for Reveal Cards In Increasing Order.
// Memory Usage: 45.5 MB, less than 5.98% of JavaScript online submissions for Reveal Cards In Increasing Order.
