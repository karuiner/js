//연속된 부분 수열의 합

// 풀이시도 2
function solution(sequence, k) {
  let ans = [],
    s = 0,
    n = sequence.length;
  let cm = [];

  for (let i = 0; i <= n; i++) {
    cm[i] = s;
    if (i < n) {
      s += sequence[i];
    }
  }

  for (let l = 0; l < n; l++) {
    for (let i = 0; i < n - l; i++) {
      if (l === 0) {
        let a = sequence[i];
        if (a === k) {
          ans = [i, i];
          break;
        }
      } else {
        let [a, b] = [cm[i], cm[i + l]];
        if (
          b - a === k &&
          (ans.length === 0 || i + l - 1 - i < ans[1] - ans[0] || i < ans[0])
        ) {
          ans = [i, i + l - 1];
        } else if (b - a > k) {
          break;
        }
      }
    }
    if (ans.length > 0) {
      break;
    }
  }

  return ans;
}

// 풀이시도 1
function solution(sequence, k) {
  let ans = [],
    s = 0,
    l = sequence.length;
  let cm = [];

  for (let i = 0; i <= l; i++) {
    cm[i] = s;
    if (i < l) {
      s += sequence[i];
    }
  }

  for (let i = 0; i < l; i++) {
    for (let j = i + 1; j <= l; j++) {
      let [a, b] = [cm[i], cm[j]];
      if (
        b - a === k &&
        (ans.length === 0 || j - 1 - i < ans[1] - ans[0] || i < ans[0])
      ) {
        ans = [i, j - 1];
      } else if (b - a > k) {
        break;
      }
    }
  }

  return ans;
}
