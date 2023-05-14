//디펜스 게임

function solution(n, k, enemy) {
  let ans = 0,
    l = enemy.length;
  if (l <= k) {
    return l;
  } else {
    let i = 0;
    while (i < l && n > 0) {
      let h = Math.floor(n / 2),
        c = enemy[i];
      if (n - c < h && k > 0) {
        k--;
      } else {
        n -= c;
      }
      i++;
    }
    console.log(i, n);
    return n > 0 ? i : i - 1;
  }
}
