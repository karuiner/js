/*
 *
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
  let db = {};
  for (let i of sentence) {
    db[i] = db[i] ? db[i] + 1 : 1;
  }
  let l = Object.keys(db).length;

  return l === 26;
};
let sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence)); //true

// Runtime: 84 ms, faster than 47.88% of JavaScript online submissions for Check if the Sentence Is Pangram.
// Memory Usage: 40.4 MB, less than 13.55% of JavaScript online submissions for Check if the Sentence Is Pangram.
