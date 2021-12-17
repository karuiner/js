// 풀이중
/*
 *
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function (words) {
  let n = words.length,
    db = {},
    k = -1;
  for (let i = 0; i < n; i++) {
    let l = words[i].length;

    for (let j = 0; j < n; j++) {
      let l2 = words[j].length;
      if (i !== j && l >= l2 && words[i].slice(0, l2) === words[j]) {
        if (db[l] === undefined) {
          db[l] = {};
        }
        if (db[l][words[i]] === undefined) {
          db[l][words[i]] = [words[j]];
        } else {
          db[l][words[i]].push(words[j]);
        }
        if (l > k) {
          k = l;
        }
      }
    }
  }
  let ans = Object.keys(db[k]);
  let p = 0;
  ans.forEach((x) => {
    p = p < db[k][x].length ? db[k][x].length : p;
  });
  ans = ans.filter((x) => db[k][x].length === p);
  ans.sort();
  return k === -1 ? [] : ans[0];
};
