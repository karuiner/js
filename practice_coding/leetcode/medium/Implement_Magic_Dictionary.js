var MagicDictionary = function () {
  this.db = {};
};

/*
 *
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
  for (let i of dictionary) {
    let box = this.db;
    if (box[i.length] === undefined) {
      box[i.length] = {};
    }
    box = box[i.length];
    box[i] = true;
  }
};

/*
 *
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  let ans = false,
    n = searchWord.length;
  if (this.db[n]) {
    let box = this.db[n];
    for (let i in box) {
      if (i !== searchWord) {
        let c = 0;
        for (let j = 0; j < n; j++) {
          if (c > 1) {
            break;
          } else if (i[j] !== searchWord[j]) {
            c++;
          }
        }
        if (c === 1) {
          ans = true;
          break;
        }
      }
      if (ans) {
        break;
      }
    }
  }
  return ans;
};

/*
 *
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

// Runtime: 182 ms, faster than 52.13% of JavaScript online submissions for Implement Magic Dictionary.
// Memory Usage: 47.1 MB, less than 48.94% of JavaScript online submissions for Implement Magic Dictionary.
