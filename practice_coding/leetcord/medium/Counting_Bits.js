/*
 *
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  let ans = [];
  for (let i = 0; i < num + 1; i++) {
    ans.push(
      i
        .toString(2)
        .split("")
        .reduce((acc, x) => acc + Number(x), 0)
    );
  }
  return ans;
};

//Runtime: 136 ms, faster than 26.48% of JavaScript online submissions for Counting Bits.
//Memory Usage: 50.5 MB, less than 17.80% of JavaScript online submissions for Counting Bits.
