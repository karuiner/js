// 야간 전술 보행
// 풀이 완료
function solution(distance, scope, times) {
  let ans = distance,
    n = scope.length;
  function f(t, time) {
    let [w, r] = time,
      f = w + r;
    if (t % f === 0) {
      return true;
    } else {
      let k = Math.floor(t / f);

      let s = k * f;
      return t > s + w;
    }
  }
  for (let i = 0; i < n; i++) {
    let [s, e] = scope[i],
      [w, r] = times[i];
    if (s > e) {
      [s, e] = [e, s];
    }

    for (let j = s; j < e + 1; j++) {
      if (!f(j, [w, r])) {
        ans = ans > j ? j : ans;
        break;
      }
    }
  }

  return ans;
}

// 풀이 시도 1
function solution(distance, scope, times) {
  let ans = distance,
    n = scope.length;
  function f(t, time) {
    let [w, r] = time,
      f = w + r;
    let k = Math.floor(t / f);
    if (k > 0 && t % f === 0) {
      k--;
    }
    return t > w + k * f && t <= (k + 1) * f;
  }
  for (let i = 0; i < n; i++) {
    let [s, e] = scope[i],
      [w, r] = times[i];
    for (let j = s; j < e + 1; j++) {
      if (!f(j, times[i])) {
        ans = ans > j ? j : ans;
      }
    }
  }

  return ans;
}
