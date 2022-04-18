//모두 0으로 만들기

//시도 1
function solution(a, edges) {
  let ans = 0,
    p = 0,
    m = 0,
    dp = [],
    target = {};
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      m += a[i];
    } else {
      p += a[i];
    }
    dp[i] = { num: i, val: a[i], visit: false, edges: [] };
    target[i] = i;
  }
  if (m + p !== 0) {
    ans = -1;
  } else if (m < 0) {
    for (let [i, j] of edges) {
      dp[i].edges.push(j);
      dp[j].edges.push(i);
    }
    function f(target, k) {
      let arr = [];
      for (let i in target) {
        if (!dp[Number(i)].visit && dp[Number(i)].edges.length === 1) {
          arr.push(Number(i));
        }
      }
      if (arr.length === 0) {
        return k;
      }
      for (let i of arr) {
        dp[i].visit = true;
        k += Math.abs(dp[i].val);
        if (dp[i].edges.length > 0) {
          let j = dp[i].edges[0];
          dp[j].val += dp[i].val;
          dp[i].val = 0;
          dp[j].edges = dp[j].edges.filter((x) => x !== i);
        }
        delete target[i];
      }
      return f(target, k);
    }
    ans = f(target, 0);
  }

  return ans;
}
