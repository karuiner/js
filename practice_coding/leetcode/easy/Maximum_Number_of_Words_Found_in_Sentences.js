/*
 *
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
  let ans = 0;
  for (let i of sentences) {
    let l = i.split(" ").length;
    ans = ans < l ? l : ans;
  }
  return ans;
};
