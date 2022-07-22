/*
 *
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
// 풀이 완료
var findReplaceString = function (s, indices, sources, targets) {
  let ans = "",
    k = 0,
    check = true;
  let dummy = indices.map((x, i) => [x, i]);
  dummy.sort((a, b) => {
    return a[0] - b[0];
  });

  for (let ii = 0; ii < indices.length; ii++) {
    let i = dummy[ii][1];
    let l = sources[i].length,
      j = indices[i];

    if (j < k) {
      check = false;
      break;
    }
    ans += s.slice(k, j);

    if (s.slice(j, j + l) === sources[i]) {
      ans += targets[i];
    } else {
      ans += s.slice(j, j + l);
    }
    k = j + l;
  }
  if (check) {
    ans += s.slice(k, s.length);
  } else {
    ans = s;
  }
  return ans;
};

// Runtime: 64 ms, faster than 94.49% of JavaScript online submissions for Find And Replace in String.
// Memory Usage: 42.7 MB, less than 77.12% of JavaScript online submissions for Find And Replace in String.

//풀이 시도 1
// var findReplaceString = function (s, indices, sources, targets) {
//   let ans = "",
//     k = 0;
//   let dummy = indices.map((x, i) => [x, i]);
//   dummy.sort((a, b) => {
//     return a[0] - b[0];
//   });

//   for (let ii = 0; ii < indices.length; ii++) {
//     let i = dummy[ii][1];
//     let l = sources[i].length,
//       j = indices[i];
//     ans += s.slice(k, j);

//     if (s.slice(j, j + l) === sources[i]) {
//       ans += targets[i];
//     } else {
//       ans += s.slice(j, j + l);
//     }
//     k = j + l;
//   }
//   ans += s.slice(k, s.length);
//   return ans;
// };
