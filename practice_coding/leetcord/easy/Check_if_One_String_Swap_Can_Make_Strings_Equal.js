/*
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      let j = -1;
      for (let k = i; k < s1.length; k++) {
        if (s2[k] === s1[i] && s1[k] === s2[i]) j = k;
      }
      if (j === -1) return false;
      s2 =
        s2.slice(0, i) + s2[j] + s2.slice(i + 1, j) + s2[i] + s2.slice(j + 1);

      break;
    }
  }
  console.log(s1, s2);
  return s1 === s2 ? true : false;
};
//Runtime: 80 ms, faster than 61.78% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
//Memory Usage: 38.7 MB, less than 54.69% of JavaScript online submissions for Check if One String Swap Can Make Strings Equal.
