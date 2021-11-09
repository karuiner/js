/*
 *
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let s = "",
    c = 1,
    j = 0;
  for (let i of chars) {
    if (i !== s) {
      if (c > 1) {
        let sc = `${c}`;
        for (let k of sc) {
          chars[j] = k;
          j++;
        }
      }
      s = i;
      chars[j] = i;
      j++;
      c = 1;
    } else {
      c++;
    }
  }
  if (c > 1) {
    for (let k of `${c}`) {
      chars[j] = k;
      j++;
    }
  }
  return j;
};

// Runtime: 88 ms, faster than 53.53% of JavaScript online submissions for String Compression.
// Memory Usage: 41 MB, less than 30.77% of JavaScript online submissions for String Compression.
