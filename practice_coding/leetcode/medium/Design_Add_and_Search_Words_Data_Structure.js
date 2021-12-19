var WordDictionary = function () {
  this.db = {};
};

/*
 *
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let l = word.length;
  if (this.db[l] === undefined) {
    this.db[l] = {};
  }
  this.db[l][word] = true;
};

/*
 *
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  let l = word.length,
    ans = false;
  if (word.split(".").length === 1) {
    if (this.db[l] !== undefined && this.db[l][word] !== undefined) {
      ans = true;
    }
  } else {
    for (let i in this.db[l]) {
      let check = true;
      for (let j = 0; j < l; j++) {
        if (word[j] !== "." && word[j] !== i[j]) {
          check = false;
          break;
        }
      }
      if (check) {
        ans = true;
        break;
      }
    }
  }
  return ans;
};

/*
 *
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

// Runtime: 172 ms, faster than 97.01% of JavaScript online submissions for Design Add and Search Words Data Structure.
// Memory Usage: 55.9 MB, less than 91.42% of JavaScript online submissions for Design Add and Search Words Data Structure.
