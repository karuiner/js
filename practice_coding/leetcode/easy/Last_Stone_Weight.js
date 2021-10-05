/*
 *
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    let [a, b, c] = [stones[0], stones[1], stones.slice(2)];
    let k = a - b === 0 ? [] : [Math.abs(b - a)];
    stones = [...c, ...k];
  }
  return stones[0] ? stones[0] : 0;
};

// Runtime: 60 ms, faster than 99.68% of JavaScript online submissions for Last Stone Weight.
// Memory Usage: 40.2 MB, less than 37.66% of JavaScript online submissions for Last Stone Weight.
