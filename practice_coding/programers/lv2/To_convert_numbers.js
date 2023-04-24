//숫자 변환하기

// 풀이 완료
// 런타임 오류가 재귀 한계로 인해 나타나는것 같다는 생각이들어
// 해당 부분은 for 문으로 대체하였다. 또한 기존의 카운트 함수를 체크함수로 수정하여
// 새값을 추가하는 함수로 사용하였다.

function solution(x, y, n) {
  let ans = -1,
    db = { [x]: 0 };

  function check(k, c) {
    let ans = false;
    if (k <= y) {
      ans = true;
      if (db[k] === undefined) {
        db[k] = c;
      } else if (db[k] > c) {
        db[k] = c;
      }
    }
    return ans;
  }

  for (let i = x; i <= y; i++) {
    if (db[i] !== undefined) {
      let k1 = i + n,
        k2 = i * 2,
        k3 = i * 3,
        c = db[i];
      check(k1, c + 1);
      check(k2, c + 1);
      check(k3, c + 1);
    }
  }

  return db[y] === undefined ? ans : db[y];
}

// 풀이 시도 1
// 모든 경우를 객체로 구성하면서 카운팅하여
// 결과에 들어가는 최소 카운팅 값을 결과로 돌려주는 방식으로 풀이 하였다.
// 일부는 런타임 오류 일부는 시간초과로 풀이에 실패하였다.

function solution(x, y, n) {
  let ans = -1,
    db = { [x]: 0 };

  function count(k, c) {
    let ans = false;
    if (k <= y) {
      ans = true;
      if (db[k] === undefined) {
        db[k] = c;
      } else if (db[k] > c) {
        db[k] = c;
      }
    }
    return ans;
  }

  function f(k) {
    let k1 = k + n,
      k2 = k * 2,
      k3 = k * 3,
      c = db[k] + 1;
    if (count(k1, c)) {
      f(k1);
    }
    if (count(k2, c)) {
      f(k2);
    }
    if (count(k3, c)) {
      f(k3);
    }
  }
  f(x);

  return db[y] === undefined ? ans : db[y];
}
