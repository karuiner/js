// 중복된 문자 제거
function solution(my_string) {
  let ans = "",
    db = {};
  for (let i of my_string) {
    if (!db[i]) {
      ans += i;
      db[i] = true;
    }
  }
  return ans;
}
