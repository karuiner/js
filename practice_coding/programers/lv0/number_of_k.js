//k의 개수

function solution(i, j, k) {
  let ans = 0;
  function count(n) {
    let s = `${n}`,
      ans = 0;
    for (let i of s) {
      if (i === `${k}`) {
        ans++;
      }
    }
    return ans;
  }

  for (let n = i; n <= j; n++) {
    ans += count(n);
  }

  return ans;
}
