//배열의 유사도
function solution(s1, s2) {
  let ans = 0,
    db = {};
  for (let i of s1) {
    db[i] = true;
  }
  for (let i of s2) {
    if (db[i]) {
      ans++;
    }
  }

  return ans;
}
