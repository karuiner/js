/*
 *
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  let a = Math.abs(((hour % 12) + minutes / 60) * 30 - (minutes / 60) * 360);
  return a > 180 ? 360 - a : a;
};

// Runtime: 76 ms, faster than 54.42% of JavaScript online submissions for Angle Between Hands of a Clock.
// Memory Usage: 38.8 MB, less than 38.14% of JavaScript online submissions for Angle Between Hands of a Clock.
