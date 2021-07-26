/*
 *
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let db = {},
    min = 100,
    max = 1;
  dictionary.forEach((x) => {
    db[x] = 1;
    min = x.length < min ? x.length : min;
    max = x.length > max ? x.length : max;
  });
  let ans = [];
  if (min === max) {
    max += 1;
  }

  for (let i of sentence.split(" ")) {
    let q = i.length < max ? i.length : max,
      s = i;
    for (let j = min; j < q; j++) {
      if (db[i.slice(0, j)]) {
        s = i.slice(0, j);
        break;
      }
    }
    ans.push(s);
  }
  return ans.join(" ");
};

// Runtime: 136 ms, faster than 67.19% of JavaScript online submissions for Replace Words.
// Memory Usage: 57.3 MB, less than 32.03% of JavaScript online submissions for Replace Words.
