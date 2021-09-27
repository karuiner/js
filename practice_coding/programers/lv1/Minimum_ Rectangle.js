function solution(sizes) {
  let x = 0,
    y = 0;
  for (let [ix, iy] of sizes) {
    [ix, iy] = ix < iy ? [iy, ix] : [ix, iy];
    x = ix > x ? ix : x;
    y = iy > y ? iy : y;
  }

  return x * y;
}
let sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
console.log(solution(sizes)); //4000
