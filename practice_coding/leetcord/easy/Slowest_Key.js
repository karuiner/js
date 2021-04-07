/*
 *
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
  let k = 0,
    s = 0,
    ans = "";
  for (let i = 0; i < releaseTimes.length; i++) {
    if (releaseTimes[i] - k > s) {
      s = releaseTimes[i] - k;
      ans = keysPressed[i];
    } else if (releaseTimes[i] - k === s) {
      s = releaseTimes[i] - k;
      ans = ans > keysPressed[i] ? ans : keysPressed[i];
    }
    k = releaseTimes[i];
  }
  return ans;
};

//Runtime: 84 ms, faster than 66.48% of JavaScript online submissions for Slowest Key.
//Memory Usage: 40.3 MB, less than 37.18% of JavaScript online submissions for Slowest Key.
