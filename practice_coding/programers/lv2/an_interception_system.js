//요격 시스템
// 4차 시도 실패
// 방향을 잘못 잡음
function solution(targets) {
  let ans = 0,
    n = targets.length,
    max = 0,
    db = {},
    q = 0;
  targets.sort((a, b) => a[1] - b[1]);
  let b = [...targets];
  b.sort((a, b) => a[0] - b[0]);

  function get([a, b], arr) {
    let k = 0;
    for (let i = 0; i < arr.length; i++) {
      let [x, y] = arr[i];
      if (x < b) {
        k++;
      } else {
        break;
      }
    }
    return arr.slice(k);
  }
  for (let [x, y] of targets) {
    if (b[0][0] < y) {
      b = get([x, y], b);
      if (b.length < n) {
        ans++;
        n = b.length;
      }
    }
    if (b.length === 0) {
      break;
    }
  }

  return ans - 1;
}

// 3차 시도 실패
// 더 효율적인 코드를 작성해야 한다.
function solution(targets) {
  let ans = 0,
    n = targets.length;
  targets.sort((a, b) => a[1] - b[1]);

  function get(arr) {
    let [a, b] = arr[0],
      ans = [];
    for (let i = 1; i < arr.length; i++) {
      let [x, y] = arr[i];
      if (y <= a || x >= b) {
        ans.push(arr[i]);
      } else {
        [a, b] = [Math.max(a, x), Math.min(b, y)];
      }
    }
    return ans;
  }
  while (targets.length > 0) {
    targets = get(targets);
    ans++;
  }

  return ans;
}

// 2차 시도 실패
// 정렬을 끝부분의 위치에따라 오름차순으로 정렬 함. 한쪽끝에서부터 일치하는 뭉치를 잘라내는 방식
// 하지만 현재 코드는 모든 케이스를 모두 학인하고 있고 필요없는것도 다시 확인 하고 있기때문에
// 효율적이지 못하다 이부분을 개선해야 할 것
function solution(targets) {
  let ans = 0,
    n = targets.length,
    lock = Array(n).fill(0);
  targets.sort((a, b) => a[1] - b[1]);

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

// 1차 시도 실패
// 길이순으로 정렬.
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
