/*
 *
 * @param {number[]} count
 * @return {number[]}
 */
var sampleStats = function (count) {
  let min = Infinity,
    max = 0,
    mean = 0,
    median = 0,
    j = 0,
    arr = [],
    mode = -1,
    db = { "-1": 0 },
    c = 0;
  for (let i = 0; i < 256; i++) {
    let a = count[i];
    if (a > 0) {
      min = i < min ? i : min;
      max = i > max ? i : max;
      if (arr.length === 0) {
        arr[j] = [i, a];
      } else {
        arr[j + 1] = [i, arr[j][1] + a];
        j++;
      }
      mean += i * a;
      if (db[i] === undefined) {
        db[i] = a;
      }
      mode = db[mode] < db[i] ? i : mode;
      c += a;
    }
  }
  if (c % 2 === 0) {
    let a = c / 2,
      p = 0;
    for (let i = 0; i < arr.length; i++) {
      let k = arr[i];
      if (a <= k[1]) {
        if (a + 1 <= k[1]) {
          median = k[0];
        } else {
          median = (k[0] + arr[i + 1][0]) / 2;
        }
        break;
      }
    }
  } else {
    let a = Math.ceil(c / 2);
    for (let i of arr) {
      if (a <= i[1]) {
        median = i[0];
        break;
      }
    }
  }

  return [min, max, mean / c, median, mode];
};

// Runtime: 105 ms, faster than 16.67% of JavaScript online submissions for Statistics from a Large Sample.
// Memory Usage: 44.9 MB, less than 16.67% of JavaScript online submissions for Statistics from a Large Sample.
