//  reference : http://weblog.jamisbuck.org/2010/12/27/maze-generation-recursive-backtracking

// reference : https://kimploo.medium.com/%EB%B0%94%EB%9E%8C%EC%A7%81%ED%95%9C-%EB%AC%B4%EC%9E%91%EC%9C%84-%EB%B0%B0%EC%97%B4-fitting-random-array-in-javascript-882d69d49e23
// function shuffleArrayES6(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

function Rndsuffle() {
  let arr = ["E", "W", "S", "N"];
  for (let i = 3; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    j = j === i ? i - 1 : j;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
function MkMaze(start, grid) {
  let dx = { E: 1, W: -1, S: 0, N: 0 },
    dy = { E: 0, W: 0, S: 1, N: -1 };
  fd = { N: 1, S: 2, E: 4, W: 8 };
  let opp = { E: "W", W: "E", N: "S", S: "N" };
  function carve_passages_from(cx, cy, grid) {
    let direc = Rndsuffle();
    for (let d of direc) {
      let [nx, ny] = [cx + dx[d], cy + dy[d]];
      if (
        0 <= ny &&
        ny <= grid.length - 1 &&
        0 <= nx &&
        nx <= grid[ny].length - 1
      ) {
        grid[cy][cx] |= fd[d];
        grid[ny][nx] |= fd[opp[d]];
        carve_passages_from(nx, ny, grid);
      }
    }
  }
  carve_passages_from(start[0], start[1], grid);
  return grid;
}
let sdata = { E: false, W: false, N: false, S: false },
  n = 2;
let grid = Array(n).fill(Array(n).fill(0));

console.log(MkMaze([0, 0], grid));
// let c = 0;
// while (c < 100) {
//   console.log(Rndsuffle());
//   c++;
// }
