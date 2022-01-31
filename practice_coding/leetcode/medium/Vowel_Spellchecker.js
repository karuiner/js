/*
 *
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
var spellchecker = function (wordlist, queries) {
  let db = {};
  db["vowels"] = { a: true, e: true, i: true, o: true, u: true };

  for (let i of wordlist) {
    let n = i.length;
    if (db[n] === undefined) {
      db[n] = {};
      db[n]["fullwords"] = [];
    }
    let s = i.toLowerCase();
    if (db[n][s] === undefined) {
      db[n][s] = {};
      db[n][s]["firstWord"] = i;
      db[n]["fullwords"].push(s);
    }
    db[n][s][i] = true;
  }
  let ans = [];
  function check(w) {
    let n = w.length,
      ans = "";
    if (db[n] !== undefined) {
      let s = w.toLowerCase();
      if (db[n][s] !== undefined) {
        if (db[n][s][w] !== undefined) {
          ans = w;
        } else {
          ans = db[n][s]["firstWord"];
        }
      } else {
        let key = db[n]["fullwords"];
        let vo = db["vowels"];
        for (let i of key) {
          let ck = true;
          for (let j = 0; j < n; j++) {
            if (i[j] !== s[j] && (vo[i[j]] && vo[s[j]]) === undefined) {
              ck = false;
              break;
            }
          }
          if (ck) {
            ans = db[n][i]["firstWord"];
            break;
          }
        }
      }
    }
    return ans;
  }
  for (let i of queries) {
    ans.push(check(i));
  }
  return ans;
};
// Runtime: 1912 ms, faster than 12.50% of JavaScript online submissions for Vowel Spellchecker.
// Memory Usage: 59.8 MB, less than 12.50% of JavaScript online submissions for Vowel Spellchecker.
