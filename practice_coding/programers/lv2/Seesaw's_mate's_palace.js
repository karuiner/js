// 시소 짝궁

// 풀이 시도 1
function solution(weights) {
  let ans = 0,
    db = {},
    l = weights.length;

  function check(a, b) {
    [a, b] = a < b ? [a, b] : [b, a];
    return db[`${a}-${b}`];
  }

  for (let i = 0; i < l - 1; i++) {
    for (let j = i + 1; j < l; j++) {
      let [a, b] = [weights[i], weights[j]];
      if (check(a, b) === undefined) {
        [a, b] = a < b ? [a, b] : [b, a];
        // 4*a= 2*b => 2= b/a
        // 4*a = 3*b => 4= 3*b/a
        // 3* a= 2*b => 3 = 2*b/a
        // 2* a= 2*b => a= b/a
        let k = b / a,
          rst = false;
        if (k === 1 || k === 2 || 3 * k === 4 || 2 * k === 3) {
          rst = true;
          ans++;
        }
        db[`${a}-${b}`] = rst;
      }
    }
  }

  return ans;
}
