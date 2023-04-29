//광석 캐기

// 풀이 완료
// 이전 과정중 런타임오류의 원인은 초기에 정의한 값으로
// 일부케이스에서는 +1이 필요치 않은데 적용되어 문제가 된것으로 추정한다.
// 해당 케이스를 수정하니 정상적인 결과를 내보낸다.
function solution(picks, minerals) {
  let idx = 0,
    n = minerals.length,
    k = 0;
  let db = [
    { diamond: 1, iron: 1, stone: 1 },
    { diamond: 5, iron: 1, stone: 1 },
    { diamond: 25, iron: 5, stone: 1 },
  ];
  let rt = [];
  for (let i = 0; i < n; i += 5) {
    let sub = [0, 0, 0],
      m = i + 5 >= n ? n : i + 5;
    for (let j = i; j < m; j++) {
      for (let k = 0; k < 3; k++) {
        sub[k] += db[k][minerals[j]];
      }
    }
    rt.push(sub);
    k++;
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

  function* heapsAlgorithm(n, array) {
    if (n === 1) {
      yield array.slice();
    } else {
      for (let i = 0; i < n - 1; i++) {
        yield* heapsAlgorithm(n - 1, array);
        const j = n % 2 === 0 ? i : 0;
        [array[j], array[n - 1]] = [array[n - 1], array[j]]; // Swap
      }
      yield* heapsAlgorithm(n - 1, array);
    }
  }

  function* getAllPermutations(array) {
    yield* heapsAlgorithm(array.length, array);
  }

  let arrp = getAllPermutations(p),
    ans = 0;
  for (let i of arrp) {
    let l = i.length,
      sub = 0;
    for (let j = 0; j < l; j++) {
      let k = i[j];
      sub += rt[j][k];

      if (ans > 0 && sub >= ans) {
        break;
      }
    }
    if (ans === 0 || sub < ans) {
      ans = sub;
    }
  }

  return ans;
}

//  풀이 시도 3 실패
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
  function permu(arr) {
    let ans = [],
      n = arr.length;
    if (n > 1) {
      for (let i = 0; i < n; i++) {
        let larr = [...arr.slice(0, i), ...arr.slice(i + 1)];
        let sub = permu(larr);
        sub = sub.map((x) => [arr[i]].concat(x));
        ans = ans.concat(sub);
      }
      return ans;
    } else {
      return arr;
    }
  }
  let arrp = permu(p),
    ans = Infinity;
  for (let i of arrp) {
    let l = i.length,
      sub = 0;
    for (let j = 0; j < l; j++) {
      let k = i[j];
      sub += arr[j][k];
      if (sub >= ans) {
        break;
      }
    }
    if (sub < ans) {
      ans = sub;
    }
  }

  return ans;
}

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
