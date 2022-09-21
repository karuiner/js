//N개의 최소공배수

// 주어진 각수의 원소들을 확인한뒤 필요한 최소량을 확인하고 측정된 최소 원소들을 곱하여 최소 공배수를 구한다.

// 풀이 완료

function solution(arr) {
  let db = {};

  function f(n) {
    let sub = {},
      d = 2;
    while (n > 1) {
      if (n % d === 0) {
        if (sub[d] === undefined) {
          sub[d] = 1;
        } else {
          sub[d]++;
        }
        if (db[d] === undefined) {
          db[d] = sub[d];
        } else if (db[d] < sub[d]) {
          db[d] = sub[d];
        }
        n = n / d;
      } else {
        d++;
      }
    }
  }
  for (let i of arr) {
    f(i);
  }
  let ans = 1;
  for (let i in db) {
    ans *= Number(i) ** db[i];
  }

  return ans;
}
