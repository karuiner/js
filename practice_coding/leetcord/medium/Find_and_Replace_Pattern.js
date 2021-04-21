/*
 *
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  function change(pattern) {
    let pdb = {},
      candi = "",
      n = 0;
    for (let i of pattern) {
      if (pdb[i] === undefined) {
        pdb[i] = n;
        candi += `${pdb[i]}`;
        n++;
      } else {
        candi += `${pdb[i]}`;
      }
    }
    return candi;
  }
  let candi = change(pattern),
    ans = [];
  for (let i of words) {
    if (candi === change(i)) {
      ans.push(i);
    }
  }
  return ans;
};
//Runtime: 80 ms, faster than 83.96% of JavaScript online submissions for Find and Replace Pattern.
//Memory Usage: 40.8 MB, less than 50.00% of JavaScript online submissions for Find and Replace Pattern.
