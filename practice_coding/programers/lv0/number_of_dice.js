function solution(box, n) {
  let [x, y, z] = box;
  let f = (x) => Math.floor(x / n);
  x = f(x);
  y = f(y);
  z = f(z);

  return x * y * z;
}
