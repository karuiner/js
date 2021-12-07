// 풀이중
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
    box[i] = false;
    for (let j of i) {
      if (box[j] === undefined) {
        box[j] = {};
      }
      box = box[j];
    }
  }
};

/*
 *
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
  let ans = false,
    c = 0;
  if (this.db[searchWord.length]) {
    let box = this.db[searchWord.length],
      c = 0;
    if (box[searchWord] === undefined) {
      for (let j of searchWord) {
        if (box[j] === undefined) {
          break;
        }
        box = box[j];
        c++;
      }
      for (let k in box) {
        let nbox = box[k],
          check = true;
        for (let j of searchWord.slice(c + 1)) {
          if (nbox[j] === undefined) {
            break;
          }
          nbox = nbox[j];
        }
        if (check) {
          ans = true;
          break;
        }
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
