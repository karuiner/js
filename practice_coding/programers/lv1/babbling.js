// 옹알이 (2)
// 풀이 완료
function solution(babbling) {
  let db = { a: "aya", m: "ma", y: "ye", w: "woo" },
    ans = 0;
  for (let word of babbling) {
    let i = 0,
      n = word.length,
      q = "";
    while (i < n) {
      if (db[word[i]]) {
        let p = db[word[i]];
        let k = p.length;
        let dum = word.slice(i, i + k);

        if (dum === p && q !== dum) {
          i += k;
          q = dum;
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (i >= n) {
      ans++;
    }
  }

  return ans;
}
