/*
 *
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {
  let db = {},
    ci = 0,
    cv = 0;
  for (let [i, j] of edges) {
    if (db[i]) {
      db[i] += 1;
    } else {
      db[i] = 1;
    }
    if (db[i] > ci) {
      cv = i;
      ci = db[i];
    }

    if (db[j]) {
      db[j] += 1;
    } else {
      db[j] = 1;
    }

    if (db[j] > ci) {
      cv = j;
      ci = db[j];
    }
  }
  return cv;
};

// Runtime: 136 ms, faster than 36.26% of JavaScript online submissions for Find Center of Star Graph.
// Memory Usage: 58.7 MB, less than 25.05% of JavaScript online submissions for Find Center of Star Graph.
