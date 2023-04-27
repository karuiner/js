//광석 캐기
// 풀이시도 2 실패
// 가능한 모든케이스를 만들고 최소 값을 찾는다.
function solution(picks, minerals) {
  let idx = 0,
    n = minerals.length,
    k = Math.floor(n / 5) + 1;
  function check(idx) {
    let ans = [0, 0, 0];
    for (let i = idx; i < idx + 5; i++) {
      if (minerals[i]) {
        if (picks[0] > 0) {
          ans[0]++;
        }
        if (picks[1] > 0) {
          ans[1] += minerals[i] !== "diamond" ? 1 : 5;
        }
        if (picks[2] > 0) {
          if (minerals[i] === "diamond") {
            ans[2] += 25;
          } else if (minerals[i] === "iron") {
            ans[2] += 5;
          } else {
            ans[2]++;
          }
        }
      } else {
        break;
      }
    }
    return ans;
  }
  let arr = [];
  while (idx < minerals.length) {
    let k = check(idx);
    arr.push(k);
    idx += 5;
  }
  let p = [],
    q = 0;
  for (let i = 0; i < k; i++) {
    for (let j = q; j < 3; j++) {
      if (picks[j] > 0) {
        p.push(j);
        picks[j]--;
        q = j;
        break;
      }
    }
  }

  function getPermutations(arr) {
    const result = [];

    function permute(arr, start) {
      if (start === arr.length - 1) {
        result.push([...arr]);
      } else {
        for (let i = start; i < arr.length; i++) {
          [arr[start], arr[i]] = [arr[i], arr[start]];
          permute(arr, start + 1);
          [arr[start], arr[i]] = [arr[i], arr[start]];
        }
      }
    }

    permute(arr, 0);

    return result;
  }
  let target = getPermutations(p),
    ans = 0;
  for (let i of target) {
    let sub = 0,
      l = 0;
    for (let j of i) {
      sub += arr[l][j];
      if (ans > 0 && sub > ans) {
        break;
      }
      l++;
    }
    if (ans === 0 || sub < ans) {
      ans = sub;
    }
  }
  return ans;
}

// 풀이 시도 1 실패
function solution(picks, minerals) {
  let ans = 0,
    idx = 0;
  function check(idx) {
    let ans = [0, 0, 0];
    for (let i = idx; i < idx + 5; i++) {
      if (minerals[i]) {
        if (picks[0] > 0) {
          ans[0]++;
        }
        if (picks[1] > 0) {
          ans[1] += minerals[i] !== "diamond" ? 1 : 5;
        }
        if (picks[2] > 0) {
          if (minerals[i] === "diamond") {
            ans[2] += 25;
          } else if (minerals[i] === "iron") {
            ans[2] += 5;
          } else {
            ans[2]++;
          }
        }
      } else {
        break;
      }
    }
    return ans;
  }

  while (idx < minerals.length) {
    let k = check(idx);
    let min = 125,
      p = -1;
    for (let i = 0; i < 3; i++) {
      if (k[i] > 0 && k[i] < min) {
        min = k[i];
        p = i;
      }
    }
    if (p >= 0) {
      ans += k[p];
      picks[p]--;
    }
    idx += 5;
  }

  return ans;
}
