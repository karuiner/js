//가장 가까운 같은 글자
function solution(s) {
  let ans = [],
    db = {};
  for (let i = 0; i < s.length; i++) {
    let a = s[i];
    if (db[a] === undefined) {
      db[a] = i;
      ans[i] = -1;
    } else {
      ans[i] = i - db[a];
      db[a] = i;
    }
  }

  return ans;
}
