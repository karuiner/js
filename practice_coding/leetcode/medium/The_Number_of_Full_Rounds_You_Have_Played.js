/*
 *
 * @param {string} loginTime
 * @param {string} logoutTime
 * @return {number}
 */
var numberOfRounds = function (loginTime, logoutTime) {
  function time(s) {
    let [a, b] = s.split(":").map(Number);
    return 60 * a + b;
  }
  function cal(a, b = false) {
    let k = Math.floor(a / 15);
    if (a % 15 !== 0 && !b) {
      k++;
    }
    return k;
  }

  let [a, b] = [time(loginTime), time(logoutTime)];
  if (b < a) {
    b += 24 * 60;
  }
  let ans = cal(b, true) - cal(a);
  return ans < 0 ? 0 : ans;
};

// Runtime: 60 ms, faster than 91.30% of JavaScript online submissions for The Number of Full Rounds You Have Played.
// Memory Usage: 41.9 MB, less than 73.91% of JavaScript online submissions for The Number of Full Rounds You Have Played.
