//요격 시스템

// 1차 시도 실패

function solution(targets) {
  let ans = 0,
    n = targets.length,
    lock = Array(n).fill(0);
  targets.sort((a, b) => a[1] - a[0] - (b[1] - b[0]));

  function get(t) {
    let [a, b] = targets[t];
    for (let i = 0; i < n; i++) {
      if (i !== t && !lock[i]) {
        let [x, y] = targets[i];
        if (y <= a || x >= b) {
        } else {
          [a, b] = [Math.max(a, x), Math.min(b, y)];
          lock[i] = 1;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    if (!lock[i]) {
      lock[i] = 1;
      get(i);
      ans++;
    }
  }

  return ans;
}
