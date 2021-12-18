/*
 *
 * @param {string[]} words
 * @return {string}
 */
// 성공작
var longestWord = function (words) {
  let db = {},
    k = 1,
    ans = {},
    q = 0;
  for (let i of words) {
    if (i.length === 1) {
      ans[i] = i;
    } else {
      let l = i.length;
      k = k < l ? l : k;
      if (db[l] === undefined) {
        db[l] = {};
      }
      if (db[l][i.slice(0, l - 1)] === undefined) {
        db[l][i.slice(0, l - 1)] = {};
      }

      db[l][i.slice(0, l - 1)][i] = true;
    }
  }
  if (Object.keys(ans).length === 0) {
    return "";
  } else {
    for (let i in ans) {
      let sub = [ans[i]],
        nsub = [];
      for (let j = 2; j < k + 1; j++) {
        let get = false;
        for (let s of sub) {
          if (db[j] !== undefined && db[j][s] !== undefined) {
            for (let g in db[j][s]) {
              nsub.push(g);
              get = true;
            }
          }
        }
        if (get && j < k) {
          sub = [...nsub];
          nsub = [];
        } else if (j < k) {
          sub.sort();
          ans[i] = sub[0];
        } else {
          if (nsub.length === 0) {
            nsub = [...sub];
          }
          nsub.sort();
          ans[i] = nsub[0];
        }
      }
    }
  }
  let nans = "";
  for (let i in ans) {
    if (nans === "") {
      nans = ans[i];
    } else if (nans.length < ans[i].length) {
      nans = ans[i];
    } else if (nans.length === ans[i].length && ans[i] < nans) {
      nans = ans[i];
    }
  }
  return nans;
};

// Runtime: 201 ms, faster than 11.38% of JavaScript online submissions for Longest Word in Dictionary.
// Memory Usage: 52.5 MB, less than 6.50% of JavaScript online submissions for Longest Word in Dictionary.

// 풀이 실패작
// var longestWord = function (words) {
//   let n = words.length,
//     db = {},
//     k = -1;
//   for (let i = 0; i < n; i++) {
//     let l = words[i].length;

//     for (let j = 0; j < n; j++) {
//       let l2 = words[j].length;
//       if (i !== j && l >= l2 && words[i].slice(0, l2) === words[j]) {
//         if (db[l] === undefined) {
//           db[l] = {};
//         }
//         if (db[l][words[i]] === undefined) {
//           db[l][words[i]] = [words[j]];
//         } else {
//           db[l][words[i]].push(words[j]);
//         }
//         if (l > k) {
//           k = l;
//         }
//       }
//     }
//   }
//   let ans = Object.keys(db[k]);
//   let p = 0;
//   ans.forEach((x) => {
//     p = p < db[k][x].length ? db[k][x].length : p;
//   });
//   ans = ans.filter((x) => db[k][x].length === p);
//   ans.sort();
//   return k === -1 ? [] : ans[0];
// };
