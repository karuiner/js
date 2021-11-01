/*
 *
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  function find(n, l) {
    let a = 2,
      k = 1;
    while (`${a}`.length < l) {
      a = a * a;
      k += k;
    }
    let b = a,
      min = k,
      max = k;
    while (b > 1 && `${b}`.length >= l) {
      b /= 2;
      min--;
    }
    min++;

    while (`${a}`.length === l) {
      a *= 2;
      max++;
    }
    max--;
    return [min, max];
  }

  let s = `${n}`,
    l = s.length,
    ans = false;
  if (n === 1) {
    return true;
  } else {
    let db = {};
    for (let i of s) {
      if (db[i] === undefined) {
        db[i] = 1;
      } else {
        db[i] += 1;
      }
    }
    let [min, max] = find(n, l);
    for (let i = min; i < max + 1; i++) {
      let v = `${2 ** i}`;
      let sub = {},
        check = true;
      for (let j of v) {
        if (sub[j] === undefined) {
          sub[j] = 1;
        } else {
          sub[j] += 1;
        }
      }
      for (let j in sub) {
        if (db[j] === undefined || sub[j] !== db[j]) {
          check = false;
          break;
        }
      }
      if (check) {
        ans = true;
        break;
      }
    }
  }
  return ans;
};

// Runtime: 80 ms, faster than 40.00% of JavaScript online submissions for Reordered Power of 2.
// Memory Usage: 42 MB, less than 15.00% of JavaScript online submissions for Reordered Power of 2.
