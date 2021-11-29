/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let db = {},
    fndb = {};
  for (let [nm, tn, fn] of orders) {
    if (fndb[fn] === undefined) {
      fndb[fn] = true;
    }
    if (db[tn] === undefined) {
      db[tn] = {};
    }

    if (db[tn][fn] === undefined) {
      db[tn][fn] = 1;
    } else {
      db[tn][fn]++;
    }
  }
  let fnarr = Object.keys(fndb);
  let tarr = Object.keys(db);
  fnarr.sort();
  let ans = [];
  ans.push(["Table", ...fnarr]);
  tarr.sort((a, b) => {
    return Number(a) - Number(b);
  });
  for (let i of tarr) {
    let sub = [i];
    for (let j of fnarr) {
      if (db[i][j] === undefined) {
        sub.push("0");
      } else {
        sub.push(`${db[i][j]}`);
      }
    }
    ans.push(sub);
  }

  return ans;
};

// Runtime: 208 ms, faster than 52.17% of JavaScript online submissions for Display Table of Food Orders in a Restaurant.
// Memory Usage: 57.2 MB, less than 52.17% of JavaScript online submissions for Display Table of Food Orders in a Restaurant.
