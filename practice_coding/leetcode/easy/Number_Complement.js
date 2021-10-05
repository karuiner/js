/*
 *
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  let ans = "0b";
  for (let i of num.toString(2)) {
    ans += i === "1" ? "0" : "1";
  }
  return Number(ans);
};
//Runtime: 80 ms, faster than 57.94% of JavaScript online submissions for Number Complement.
//Memory Usage: 38.7 MB, less than 39.06% of JavaScript online submissions for Number Complement.
