/*
 *
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  let n = characters.length,
    c = combinationLength,
    word = characters.toLowerCase();
  function work(word, l, w) {
    let ans = [];
    if (l - 1 >= 0) {
      for (let i = 0; i <= word.length - l; i++) {
        let a = word[i],
          dummy = word.slice(i + 1);
        let sub = work(dummy, l - 1, w + a);
        ans = [...ans, ...sub];
      }
    } else {
      return [w];
    }
    return ans;
  }

  this.words = work(word, c, "");
};

/*
 *
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  let ans = this.words[0];
  this.words = this.words.slice(1);
  return ans;
};

/*
 *
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.words.length > 0;
};

/*
 *
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// Runtime: 112 ms, faster than 70.73% of JavaScript online submissions for Iterator for Combination.
// Memory Usage: 47.2 MB, less than 10.98% of JavaScript online submissions for Iterator for Combination.
