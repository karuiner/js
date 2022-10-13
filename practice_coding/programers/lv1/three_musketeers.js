//삼총사

// 풀이 완료
function solution(number) {
  let ans = 0;
  let db = {},
    n = number.length;
  for (let i = 0; i < number.length; i++) {
    if (db[number[i]] === undefined) {
      db[number[i]] = [];
    }
    db[number[i]].push(i);
  }

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      let k = -(number[i] + number[j]);
      if (k === 0) {
        k = 0;
      }
      if (db[k]) {
        for (let l of db[k]) {
          if (l > j) {
            ans++;
          }
        }
      }
    }
  }

  return ans;
}
