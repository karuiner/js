/*
 *
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let db = {},
    i = 1,
    j = 1,
    a = [1],
    b = [1],
    arr = [];
  [x, y] = x < y ? [x, y] : [y, x];
  if (x > 1) {
    while (x * i < bound) {
      i *= x;
      a.push(i);
    }
  }
  if (y > 1) {
    while (y * j < bound) {
      j *= y;
      b.push(j);
    }
  }
  for (let i of a) {
    for (let j of b) {
      let k = i + j;
      if (db[k] === undefined && k <= bound) {
        db[k] = true;
        arr.push(k);
      } else if (k > bound) {
        break;
      }
    }
  }

  arr.sort((a, b) => a - b);
  return arr;
};

// Runtime: 93 ms, faster than 37.50% of JavaScript online submissions for Powerful Integers.
// Memory Usage: 43.7 MB, less than 25.00% of JavaScript online submissions for Powerful Integers.
