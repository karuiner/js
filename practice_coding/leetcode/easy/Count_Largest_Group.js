/*
 *
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function (n) {
  let db = [],
    mx = 0;
  let f = (x) => `${x}`.split("").reduce((acc, x) => acc + Number(x), 0);

  for (let i = 1; i <= n; i++) {
    let j = f(i) - 1;
    db[j] = db[j] === undefined ? 1 : db[j] + 1;
    if (db[j] > mx) mx = db[j];
  }
  return db.reduce((acc, x) => (x === mx ? acc + 1 : acc), 0);
};
//Runtime: 96 ms, faster than 31.58% of JavaScript online submissions for Count Largest Group.
//Memory Usage: 44.1 MB, less than 35.53% of JavaScript online submissions for Count Largest Group.
