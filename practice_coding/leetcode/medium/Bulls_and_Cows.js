/*
 *
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function (secret, guess) {
  let db = {},
    a = 0,
    b = 0,
    n = secret.length,
    check = Array(n).fill(true);
  for (let i = 0; i < n; i++) {
    let x = secret[i],
      y = guess[i];
    if (x === y) {
      a++;
      check[i] = false;
    } else {
      if (db[x] === undefined) {
        db[x] = 1;
      } else {
        db[x]++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    let y = guess[i];
    if (check[i] && db[y] !== undefined && db[y] > 0) {
      db[y]--;
      b++;
    }
  }

  return `${a}A${b}B`;
};
// Runtime: 121 ms, faster than 29.05% of JavaScript online submissions for Bulls and Cows.
// Memory Usage: 43.5 MB, less than 91.90% of JavaScript online submissions for Bulls and Cows.
