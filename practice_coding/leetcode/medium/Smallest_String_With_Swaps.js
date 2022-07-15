/*
 *
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */

//시도 2
var smallestStringWithSwaps = function (s, pairs) {
  function mkpath(arr, l) {
    let db = {};
    for (let [i, j] of arr) {
      if (db[i] === undefined) {
        db[i] = {};
      }
      db[i][j] = true;
      if (db[j] === undefined) {
        db[j] = {};
      }
      db[j][i] = true;
    }
    let keys = Object.keys(db);
    for (let i of keys) {
      let s = i,
        out = {},
        next = [i];
      while (next.length > 0) {
        let sub = [...next];
        next = [];
        for (let j of sub) {
          if (j !== i && db[i][j] === undefined) {
            db[i][j] = true;
          }
          out[j] = true;
          let k = Object.keys(db[j]).filter((x) => out[x] === undefined);
          next = next.concat(k);
        }
      }
    }

    return db;
  }
  let pdb = mkpath(pairs, s.length),
    car = s.split("");
  let sdb = {},
    key = [],
    check = Array(s.length).fill(false),
    min = 0;
  car.forEach((x, i) => {
    if (sdb[x] === undefined) {
      sdb[x] = {};
      key.push(x);
    }
    sdb[x][i] = true;
  });
  key.sort();

  for (let i of key) {
    console.log(i, Object.keys(sdb[i]).map(Number));
  }

  console.log(pdb);
  return car.join("");
};

// 시도 1
// var smallestStringWithSwaps = function (s, pairs) {
//   let check = false,
//     arr = s.split(""),
//     ans = s;
//   while (!check) {
//     check = true;
//     for (let [i, j] of pairs) {
//       if (arr[i] > arr[j]) {
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       ans = arr.join("");
//       break;
//     }
//   }
//   return ans;
// };
