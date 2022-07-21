/*
 *
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
//풀이 시도 1
var findReplaceString = function (s, indices, sources, targets) {
  let ans = "",
    k = 0;
  let dummy = indices.map((x, i) => [x, i]);
  dummy.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let ii = 0; ii < indices.length; ii++) {
    let i = dummy[ii][1];
    let l = sources[i].length,
      j = indices[i];
    ans += s.slice(k, j);

    if (s.slice(j, j + l) === sources[i]) {
      ans += targets[i];
    } else {
      ans += s.slice(j, j + l);
    }
    k = j + l;
  }
  ans += s.slice(k, s.length);
  return ans;
};
