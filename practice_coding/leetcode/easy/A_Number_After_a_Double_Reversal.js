/*
 *
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  function reverse(s) {
    let ns = "";
    for (let i = 0; i < s.length; i++) {
      ns = s[i] + ns;
    }

    return `${Number(ns)}`;
  }
  let s = `${num}`;
  let ns = reverse(s);
  let nns = reverse(ns);
  return s === nns;
};
// Runtime: 60 ms, faster than 96.77% of JavaScript online submissions for A Number After a Double Reversal.
// Memory Usage: 42.6 MB, less than 7.39% of JavaScript online submissions for A Number After a Double Reversal.

// reference code
// var isSameAfterReversals = function(num) {
//   return num % 10 !== 0 || `${num}`.length === 1;
// };

// Runtime: 64 ms, faster than 93.55% of JavaScript online submissions for A Number After a Double Reversal.
// Memory Usage: 42.4 MB, less than 7.39% of JavaScript online submissions for A Number After a Double Reversal.
