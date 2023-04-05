// parallel

function solution(dots) {
  let ans = 0;

  function cal(d1, d2) {
    return (d2[1] - d1[1]) / (d2[0] - d1[0]);
  }
  function check(i, j, k) {
    let a = cal(dots[0], dots[i]);
    let b = cal(dots[j], dots[k]);
    return a === b || a * b === 1;
  }
  if (!ans && check(1, 2, 3)) {
    ans = 1;
  }
  if (!ans && check(2, 1, 3)) {
    ans = 1;
  }
  if (!ans && check(3, 1, 2)) {
    ans = 1;
  }
  return ans;
}
