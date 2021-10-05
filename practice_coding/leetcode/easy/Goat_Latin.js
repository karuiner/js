/*
 *
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  return S.split(" ").reduce((acc, x, i) => {
    x = x.split("");
    let k = "";
    if (["a", "e", "i", "o", "u"].includes(x[0].toLowerCase())) {
      k = x.join("") + "ma";
    } else {
      k = x.slice(1).join("") + x[0] + "ma";
    }
    return i === 0
      ? acc + k + "".padEnd(i + 1, "a")
      : acc + " " + k + "".padEnd(i + 1, "a");
  }, "");
};

//Runtime: 76 ms, faster than 85.61% of JavaScript online submissions for Goat Latin.
//Memory Usage: 38.9 MB, less than 50.36% of JavaScript online submissions for Goat Latin.
