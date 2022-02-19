function Mkdata(n) {
  let dummy = Array(n).fill(0);
  let mdata = dummy.map((x, i) => {
    return dummy.map((y, j) => {
      let pass = [false, false, false, false]; // [up,down,left,right]
      if (i < n - 1) {
        pass[0] = true;
      }
      if (i > 0) {
        pass[1] = true;
      }
      if (j > 0) {
        pass[2] = true;
      }
      if (j < n - 1) {
        pass[3] = true;
      }

      return { pass, here: [i, j] };
    });
  });
  return mdata;
}

//try - 01
// function pathfinder(data, start, end, c, path) {
//   let n = data.length,
//     [i, j] = start,
//     ans = null;
//   if (`${i}-${j}` === `${end[0]}-${end[1]}`) {
//     return { ans: true, nc: c + 1, path: [...path, start] };
//   } else if (c >= n ** 2) {
//     return { ans: false, nc: c + 1, path: [...path, start] };
//   }

//   let pass = data[i][j]["pass"];
//   if (pass[0]) {
//     let sub = pathfinder(data, [i + 1, j], end, c + 1, [...path, start]);
//     if (ans === null) {
//       ans = { ...sub };
//     }
//   }

//   if (pass[1]) {
//     let sub = pathfinder(data, [i - 1, j], end, c + 1, [...path, start]);
//     if (ans === null) {
//       ans = { ...sub };
//     } else if (sub.nc < ans.nc) {
//       ans = { ...sub };
//     }
//   }
//   if (pass[2]) {
//     let sub = pathfinder(data, [i, j - 1], end, c + 1, [...path, start]);
//     if (ans === null) {
//       ans = { ...sub };
//     } else if (sub.nc < ans.nc) {
//       ans = { ...sub };
//     }
//   }
//   if (pass[3]) {
//     let sub = pathfinder(data, [i, j + 1], end, c + 1, [...path, start]);
//     if (ans === null) {
//       ans = { ...sub };
//     } else if (sub.nc < ans.nc) {
//       ans = { ...sub };
//     }
//   }

//   return ans;
// }

// try - 02
function pathfinder(data, start, end, c, path) {
  let n = data.length,
    [i, j] = start,
    ans = { ans: false, nc: c + 1, path: [...path, start] };
  if (`${i}-${j}` === `${end[0]}-${end[1]}`) {
    return { ...ans, ans: true };
  } else if (!data[i][j]["visit"]) {
    data[i][j]["visit"] = true;
    let pass = data[i][j]["pass"];
    if (pass[0]) {
      let sub = pathfinder([...data], [i + 1, j], end, c + 1, [...path, start]);
      if (sub.ans) {
        ans = { ...sub };
      }
    }

    if (pass[1]) {
      let sub = pathfinder([...data], [i - 1, j], end, c + 1, [...path, start]);
      if (!ans.ans) {
        ans = { ...sub };
      } else if (ans.ans && sub.ans && sub.nc < ans.nc) {
        ans = { ...sub };
      }
    }
    if (pass[2]) {
      let sub = pathfinder([...data], [i, j - 1], end, c + 1, [...path, start]);
      if (!ans.ans) {
        ans = { ...sub };
      } else if (ans.ans && sub.ans && sub.nc < ans.nc) {
        ans = { ...sub };
      }
    }
    if (pass[3]) {
      let sub = pathfinder([...data], [i, j + 1], end, c + 1, [...path, start]);
      if (!ans.ans) {
        ans = { ...sub };
      } else if (ans.ans && sub.ans && sub.nc < ans.nc) {
        ans = { ...sub };
      }
    }
  }

  return ans;
}

let n = 4;
let mdata = Mkdata(n);
console.log(pathfinder(mdata, [0, 0], [n - 1, n - 1], 0, []));
console.log(pathfinder(mdata, [3, 1], [n - 1, n - 1], 0, []));
console.log(mdata);
