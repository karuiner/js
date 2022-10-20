//할인 행사

// 풀이 시도 1
function solution(want, number, discount) {
  let db = {},
    arr = [],
    n = discount.length,
    n1 = want.length,
    ans = 0;
  for (let i = 0; i < n - 9; i++) {
    if (i === 0) {
      for (let j = 0; j < 10; j++) {
        if (db[discount[j]] === undefined) {
          db[discount[j]] = 0;
        }
        db[discount[j]]++;
      }
    } else {
      if (i + 9 < n) {
        db[discount[i + 9]]++;
      }
      if (db[discount[i - 1]] > 0) {
        db[discount[i - 1]]--;
      }
    }
    let check = true;
    for (let j = 0; j < n1; j++) {
      if (db[want[j]] === undefined || db[want[j]] < number[j]) {
        check = false;
        break;
      }
    }
    if (check) {
      ans++;
    }
  }

  return ans;
}
