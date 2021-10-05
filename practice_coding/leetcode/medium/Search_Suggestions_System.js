/*
 *
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort((a, b) => (a > b ? 1 : -1));
  let n = searchWord.length;
  let ans = [];
  for (let i = 1; i <= n; i++) {
    let p = searchWord.slice(0, i);
    let sub = products.filter((x) => {
      return x.slice(0, i) === p;
    });

    ans.push(sub.slice(0, 3));
  }
  return ans;
};
// Runtime: 205 ms, faster than 40.87% of JavaScript online submissions for Search Suggestions System.
// Memory Usage: 49.5 MB, less than 99.07% of JavaScript online submissions for Search Suggestions System.
