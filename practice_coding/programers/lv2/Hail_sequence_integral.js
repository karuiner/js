//우박 수열 정적분
// 풀이 완료
function solution(k, ranges) {
  let ans = [],
    sub = [0],
    c = 1;

  function f(x) {
    if (x % 2 === 0) {
      return x / 2;
    } else {
      return x * 3 + 1;
    }
  }

  while (k > 1) {
    let nk = f(k);
    sub[c] = sub[c - 1] + (k + nk) * 0.5;
    c++;
    k = nk;
  }
  for (let [a, b] of ranges) {
    if (a <= c + b - 1) {
      ans.push(sub[c + b - 1] - sub[a]);
    } else {
      ans.push(-1);
    }
  }

  return ans;
}
